import { useEffect, useState } from "react";
import {
  Car,
  CalendarCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AgencyLayout from "../../components/agency/AgencyLayout";
import { getVehicles } from "../../services/vehicleService";
import {
  acceptReservation,
  getReservations,
  refuseReservation,
} from "../../services/reservationService";

function AgencyDashboard() {
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [reservationsCount, setReservationsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const vehiclesData = await getVehicles();
      const reservationsData = await getReservations();

      const vehicles = Array.isArray(vehiclesData)
        ? vehiclesData
        : vehiclesData.data || [];

      const reservationItems = Array.isArray(reservationsData)
        ? reservationsData
        : reservationsData.data || [];

      const recentReservations = reservationItems.slice(0, 5).map((reservation) => {
        const vehicle = reservation.vehicule || reservation.vehicle || {};
        const vehicleFromList =
          vehicles.find(
            (car) =>
              String(car.id) ===
              String(reservation.vehicule_id || reservation.vehicle_id)
          ) || {};

        const selectedVehicle = Object.keys(vehicle).length
          ? vehicle
          : vehicleFromList;

        return {
          id: reservation.id,
          client:
            reservation.client ||
            reservation.user?.name ||
            reservation.user_name ||
            `Client #${reservation.user_id || 1}`,
          vehicle:
            reservation.vehicle_name ||
            `${selectedVehicle.marque || ""} ${selectedVehicle.modele || ""}`.trim() ||
            `Véhicule #${reservation.vehicule_id || reservation.vehicle_id || ""}`,
          date:
            reservation.date_debut ||
            reservation.dateDebut ||
            reservation.created_at?.slice(0, 10) ||
            "—",
          status: formatStatus(reservation.status || "en_attente"),
        };
      });

      setVehiclesCount(vehicles.length);
      setReservationsCount(reservationItems.length);
      setReservations(recentReservations);
    } catch (error) {
      console.error("Erreur chargement dashboard agence:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleAccept = async (id) => {
    try {
      await acceptReservation(id);
      await loadDashboard();
    } catch (error) {
      console.error("Erreur acceptation réservation:", error);
      alert("Impossible d'accepter la réservation.");
    }
  };

  const handleRefuse = async (id) => {
    try {
      await refuseReservation(id);
      await loadDashboard();
    } catch (error) {
      console.error("Erreur refus réservation:", error);
      alert("Impossible de refuser la réservation.");
    }
  };

  return (
    <AgencyLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#22C55E]">
            Responsable Agence
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-[-0.05em]">
            Dashboard Agence
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
            Gestion des réservations et des véhicules de l’agence.
          </p>
        </div>

        <div className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-6 py-4 text-sm font-black text-[#22C55E]">
          Rentivo Agence
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card
          icon={<Car />}
          title="Véhicules agence"
          value={vehiclesCount}
        />

        <Card
          icon={<CalendarCheck />}
          title="Réservations agence"
          value={reservationsCount}
        />
      </div>

      <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Réservations
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
              Demandes récentes
            </h2>
          </div>
        </div>

        {loading && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Chargement des réservations...
          </div>
        )}

        {!loading && reservations.length === 0 && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Aucune réservation trouvée.
          </div>
        )}

        {!loading && reservations.length > 0 && (
          <div className="mt-10 space-y-5">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-6"
              >
                <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <p className="text-sm text-white/35">
                      Réservation #{reservation.id}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {reservation.client}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/45">
                      <span>{reservation.vehicle}</span>
                      <span>•</span>
                      <span>{reservation.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-xl px-5 py-3 text-xs font-black ${
                        reservation.status === "Confirmée"
                          ? "bg-[#22C55E]/10 text-[#22C55E]"
                          : reservation.status === "Refusée"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-400/10 text-yellow-300"
                      }`}
                    >
                      {reservation.status}
                    </span>

                    <button
                      onClick={() => handleAccept(reservation.id)}
                      className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-4 text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]"
                    >
                      <CheckCircle2 size={20} />
                    </button>

                    <button
                      onClick={() => handleRefuse(reservation.id)}
                      className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AgencyLayout>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#22C55E]/10 p-5 text-[#22C55E]">
          {icon}
        </div>

        <h3 className="text-5xl font-black">
          {value}
        </h3>
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/40">
        {title}
      </p>
    </div>
  );
}

function formatStatus(status) {
  if (status === "acceptee") {
    return "Confirmée";
  }

  if (status === "refusee") {
    return "Refusée";
  }

  if (status === "annulee") {
    return "Annulée";
  }

  return "En attente";
}

export default AgencyDashboard;