import { useEffect, useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import Status from "../../components/admin/Status";
import {
  acceptReservation,
  getReservations,
  refuseReservation,
} from "../../services/reservationService";
import { getVehicles } from "../../services/vehicleService";

function ReservationsManagement() {
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState("");
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

        const vehicleName =
          reservation.vehicule_name ||
          reservation.vehicle_name ||
          `${vehicle.marque || ""} ${vehicle.modele || ""}`.trim() ||
          `Véhicule #${reservation.vehicule_id || reservation.vehicle_id || ""}`;

        return {
          id: reservation.id,
          client:
            reservation.client ||
            reservation.user?.name ||
            reservation.user_name ||
            `Client #${reservation.user_id || 1}`,
          vehicule: vehicleName,
          dateDebut:
            reservation.dateDebut ||
            reservation.date_debut ||
            reservation.date_start ||
            "—",
          dateFin:
            reservation.dateFin ||
            reservation.date_fin ||
            reservation.date_end ||
            "—",
          prixTotal:
            reservation.prixTotal ||
            reservation.prix_total ||
            reservation.total ||
            0,
          statut:
            reservation.statut ||
            formatStatus(reservation.status || "en_attente"),
        };
      });

      setReservations(formattedReservations);
    } catch (error) {
      console.error("Erreur chargement réservations:", error);
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

  const filteredReservations = reservations.filter((reservation) => {
    const value = search.toLowerCase();

    return (
      reservation.client.toLowerCase().includes(value) ||
      reservation.vehicule.toLowerCase().includes(value) ||
      String(reservation.id).includes(value)
    );
  });

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Validation et suivi des réservations clients.
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
            Gestion des réservations
          </h1>
        </div>
      </div>

      <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <Search size={18} className="text-white/35" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une réservation..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {loading && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Chargement des réservations...
          </div>
        )}

        {!loading && filteredReservations.length === 0 && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Aucune réservation trouvée.
          </div>
        )}

        {!loading && filteredReservations.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[1200px] border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-sm uppercase tracking-[0.2em] text-white/35">
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Véhicule</th>
                  <th className="pb-4">Date début</th>
                  <th className="pb-4">Date fin</th>
                  <th className="pb-4">Prix total</th>
                  <th className="pb-4">Statut</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="bg-black/20"
                  >
                    <td className="rounded-l-2xl px-5 py-5">
                      <p className="text-lg font-black">
                        {reservation.client}
                      </p>

                      <p className="mt-1 text-sm text-white/40">
                        Réservation #{reservation.id}
                      </p>
                    </td>

                    <td className="px-5 py-5 text-white/70">
                      {reservation.vehicule}
                    </td>

                    <td className="px-5 py-5 text-white/70">
                      {reservation.dateDebut}
                    </td>

                    <td className="px-5 py-5 text-white/70">
                      {reservation.dateFin}
                    </td>

                    <td className="px-5 py-5 font-black text-[#22C55E]">
                      {reservation.prixTotal} DH
                    </td>

                    <td className="px-5 py-5">
                      <Status status={reservation.statut} />
                    </td>

                    <td className="rounded-r-2xl px-5 py-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleAccept(reservation.id)}
                          className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-3 text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]"
                        >
                          <CheckCircle2 size={18} />
                        </button>

                        <button
                          onClick={() => handleRefuse(reservation.id)}
                          className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                        >
                          <XCircle size={18} />
                        </button>

                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:border-[#22C55E]/20 hover:text-[#22C55E]">
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
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

export default ReservationsManagement;