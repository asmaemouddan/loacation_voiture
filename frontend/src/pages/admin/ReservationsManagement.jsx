import {
  Search,
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import Status from "../../components/admin/Status";

function ReservationsManagement() {
  const reservations = [
    {
      id: 1,
      client: "Laila Amrani",
      vehicule: "Porsche 911 Carrera",
      dateDebut: "12 Juin 2026",
      dateFin: "15 Juin 2026",
      prixTotal: "5400 DH",
      statut: "En attente",
    },

    {
      id: 2,
      client: "Yassine Alami",
      vehicule: "BMW M4 Competition",
      dateDebut: "18 Juin 2026",
      dateFin: "22 Juin 2026",
      prixTotal: "6400 DH",
      statut: "Confirmée",
    },

    {
      id: 3,
      client: "Sara Bennani",
      vehicule: "Mercedes AMG GT",
      dateDebut: "25 Juin 2026",
      dateFin: "28 Juin 2026",
      prixTotal: "6600 DH",
      statut: "Annulée",
    },
  ];

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
        {/* SEARCH */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <Search size={18} className="text-white/35" />

          <input
            type="text"
            placeholder="Rechercher une réservation..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {/* TABLE */}
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
              {reservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="bg-black/20"
                >
                  {/* CLIENT */}
                  <td className="rounded-l-2xl px-5 py-5">
                    <p className="text-lg font-black">
                      {reservation.client}
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      Réservation #{reservation.id}
                    </p>
                  </td>

                  {/* VEHICLE */}
                  <td className="px-5 py-5 text-white/70">
                    {reservation.vehicule}
                  </td>

                  {/* START DATE */}
                  <td className="px-5 py-5 text-white/70">
                    {reservation.dateDebut}
                  </td>

                  {/* END DATE */}
                  <td className="px-5 py-5 text-white/70">
                    {reservation.dateFin}
                  </td>

                  {/* TOTAL */}
                  <td className="px-5 py-5 font-black text-[#22C55E]">
                    {reservation.prixTotal}
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-5">
                    <Status status={reservation.statut} />
                  </td>

                  {/* ACTIONS */}
                  <td className="rounded-r-2xl px-5 py-5">
                    <div className="flex items-center gap-3">
                      <button className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-3 text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]">
                        <CheckCircle2 size={18} />
                      </button>

                      <button className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white">
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
      </div>
    </AdminLayout>
  );
}

export default ReservationsManagement;