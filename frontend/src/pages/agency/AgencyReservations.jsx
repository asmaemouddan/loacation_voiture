import { useEffect, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Eye,
  CalendarCheck,
} from "lucide-react";

import AgencyLayout from "../../components/agency/AgencyLayout";
import {
  acceptReservation,
  getReservations,
  refuseReservation,
} from "../../services/reservationService";
import { getVehicles } from "../../services/vehicleService";

function AgencyReservations() {
  const [reservations, setReservations] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadReservations = async () => {
    try {
      setLoading(true);

      const reservationsData = await getReservations();
      const vehiclesData = await getVehicles();

      const reservationItems = Array.isArray(reservationsData)
        ? reservationsData
        : reservationsData.data || [];

      const vehicleItems = Array.isArray(vehiclesData)
        ? vehiclesData
        : vehiclesData.data || [];

      const formattedReservations = reservationItems.map((reservation) => {
        const vehicle =
          reservation.vehicule ||
          reservation.vehicle ||
          vehicleItems.find(
            (car) =>
              String(car.id) ===
              String(reservation.vehicule_id || reservation.vehicle_id)
          ) ||
          {};

        return {
          id: reservation.id,
          client:
            reservation.client ||
            reservation.user?.name ||
            reservation.user_name ||
            `Client #${reservation.user_id || 1}`,
          vehicle:
            reservation.vehicle_name ||
            `${vehicle.marque || ""} ${vehicle.modele || ""}`.trim() ||
            `Véhicule #${reservation.vehicule_id || reservation.vehicle_id || ""}`,
          date:
            reservation.date_debut ||
            reservation.dateDebut ||
            reservation.created_at?.slice(0, 10) ||
            "—",
          total:
            reservation.prix_total ||
            reservation.total ||
            reservation.price_total ||
            0,
          status: formatStatus(reservation.status || "en_attente"),
        };
      });

      setReservations(formattedReservations);
      setPendingCount(
        formattedReservations.filter(
          (reservation) => reservation.status === "En attente"
        ).length
      );
    } catch (error) {
      console.error("Erreur chargement réservations agence:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReservations();
  }, []);

  const handleAccept = async (id) => {
    try {
      await acceptReservation(id);
      await loadReservations();
    } catch (error) {
      console.error("Erreur acceptation réservation:", error);
      alert("Impossible d'accepter la réservation.");
    }
  };

  const handleRefuse = async (id) => {
    try {
      await refuseReservation(id);
      await loadReservations();
    } catch (error) {
      console.error("Erreur refus réservation:", error);
      alert("Impossible de refuser la réservation.");
    }
  };

  return (
    <AgencyLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Gérez les réservations de votre agence.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Réservations agence
          </h1>
        </div>

        <div className="rounded-2xl bg-[#22C55E]/10 px-5 py-3 text-sm font-black text-[#22C55E]">
          {pendingCount} demandes en attente
        </div>
      </div>

      {loading && (
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-sm font-bold text-[#22C55E]">
          Chargement des réservations...
        </div>
      )}

      {!loading && reservations.length === 0 && (
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-sm font-bold text-[#22C55E]">
          Aucune réservation trouvée.
        </div>
      )}

      {!loading && reservations.length > 0 && (
        <div className="mt-8 space-y-5">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
                    <CalendarCheck size={28} />
                  </div>

                  <div>
                    <p className="text-sm text-white/45">
                      Réservation #{reservation.id}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {reservation.client}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/55">
                      <span>{reservation.vehicle}</span>
                      <span>•</span>
                      <span>{reservation.date}</span>
                      <span>•</span>
                      <span className="font-black text-[#22C55E]">
                        {reservation.total} DH
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-xl px-4 py-2 text-xs font-black ${
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
                    className="flex items-center gap-2 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-5 py-3 font-bold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]"
                  >
                    <CheckCircle2 size={18} />
                    Accepter
                  </button>

                  <button
                    onClick={() => handleRefuse(reservation.id)}
                    className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <XCircle size={18} />
                    Refuser
                  </button>

                  <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 font-bold text-white/60 transition hover:text-[#22C55E]">
                    <Eye size={18} />
                    Voir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AgencyLayout>
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

export default AgencyReservations;