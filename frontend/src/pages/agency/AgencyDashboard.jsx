import {
  Car,
  CalendarCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AgencyLayout from "../../components/agency/AgencyLayout";

function AgencyDashboard() {
  const reservations = [
    {
      id: 1,
      client: "Laila Amrani",
      vehicle: "BMW M4 Competition",
      date: "12 Juin 2026",
      status: "En attente",
    },

    {
      id: 2,
      client: "Sara Bennani",
      vehicle: "Porsche 911 Carrera",
      date: "15 Juin 2026",
      status: "Confirmée",
    },

    {
      id: 3,
      client: "Yassine Alami",
      vehicle: "Range Rover Sport",
      date: "18 Juin 2026",
      status: "En attente",
    },
  ];

  return (
    <AgencyLayout>
      {/* HEADER */}
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
          Rentivo Fès Centre
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card
          icon={<Car />}
          title="Véhicules agence"
          value="18"
        />

        <Card
          icon={<CalendarCheck />}
          title="Réservations agence"
          value="42"
        />
      </div>

      {/* RESERVATIONS */}
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
                        : "bg-yellow-400/10 text-yellow-300"
                    }`}
                  >
                    {reservation.status}
                  </span>

                  <button className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-4 text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]">
                    <CheckCircle2 size={20} />
                  </button>

                  <button className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400 transition hover:bg-red-500 hover:text-white">
                    <XCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default AgencyDashboard;