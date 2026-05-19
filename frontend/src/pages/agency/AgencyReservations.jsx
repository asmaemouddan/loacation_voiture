import {
  CheckCircle2,
  XCircle,
  Eye,
  CalendarCheck,
} from "lucide-react";

import AgencyLayout from "../../components/agency/AgencyLayout";
function AgencyReservations() {
  const reservations = [
    {
      id: 1,
      client: "Laila Amrani",
      vehicle: "BMW M4 Competition",
      date: "12 Juin 2026",
      total: "5400 DH",
      status: "En attente",
    },

    {
      id: 2,
      client: "Yassine Alami",
      vehicle: "Porsche 911 Carrera",
      date: "15 Juin 2026",
      total: "7200 DH",
      status: "Confirmée",
    },

    {
      id: 3,
      client: "Sara Bennani",
      vehicle: "Range Rover Sport",
      date: "18 Juin 2026",
      total: "6100 DH",
      status: "En attente",
    },
  ];

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
          8 demandes en attente
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              {/* LEFT */}
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
                      {reservation.total}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-xl px-4 py-2 text-xs font-black ${
                    reservation.status === "Confirmée"
                      ? "bg-[#22C55E]/10 text-[#22C55E]"
                      : "bg-yellow-400/10 text-yellow-300"
                  }`}
                >
                  {reservation.status}
                </span>

                <button className="flex items-center gap-2 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-5 py-3 font-bold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]">
                  <CheckCircle2 size={18} />
                  Accepter
                </button>

                <button className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 font-bold text-red-400 transition hover:bg-red-500 hover:text-white">
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
    </AgencyLayout>
  );
}

export default AgencyReservations;