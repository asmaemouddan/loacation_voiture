import {
  TrendingUp,
  Wallet,
  CalendarCheck,
  Car,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

function Reports() {
  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Analysez les performances de votre plateforme.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Rapports & Statistiques
          </h1>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card
          icon={<Wallet />}
          title="Revenus"
          value="125 430 DH"
          growth="+22%"
        />

        <Card
          icon={<CalendarCheck />}
          title="Réservations"
          value="217"
          growth="+12%"
        />

        <Card
          icon={<Car />}
          title="Véhicules loués"
          value="32"
          growth="+8%"
        />

        <Card
          icon={<TrendingUp />}
          title="Croissance"
          value="84%"
          growth="+18%"
        />
      </div>

      {/* CHARTS */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* REVENUE */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/45">
                Revenus mensuels
              </p>

              <h2 className="mt-2 text-3xl font-black">
                2026
              </h2>
            </div>

            <div className="rounded-2xl bg-[#22C55E]/10 px-5 py-3 text-sm font-black text-[#22C55E]">
              +22%
            </div>
          </div>

          <div className="mt-10 flex h-72 items-end justify-between gap-3">
            {[
              120,
              180,
              140,
              220,
              190,
              260,
              210,
              280,
              240,
              300,
              270,
              320,
            ].map((height, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div
                  style={{ height }}
                  className="w-full rounded-t-2xl bg-gradient-to-t from-[#22C55E] to-[#4ADE80]"
                />

                <span className="text-xs text-white/35">
                  {
                    [
                      "Jan",
                      "Fév",
                      "Mar",
                      "Avr",
                      "Mai",
                      "Juin",
                      "Juil",
                      "Août",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Déc",
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TOP VEHICLES */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
          <p className="text-sm text-white/45">
            Véhicules populaires
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Top locations
          </h2>

          <div className="mt-8 space-y-5">
            <Vehicle
              name="Porsche 911 Carrera"
              count="48 réservations"
              image="/images/cars/porsche.jpg"
            />

            <Vehicle
              name="BMW M4 Competition"
              count="37 réservations"
              image="/images/cars/bmw-m4.jpg"
            />

            <Vehicle
              name="Range Rover Sport"
              count="29 réservations"
              image="/images/cars/amg.jpg"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function Card({ icon, title, value, growth }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#22C55E]/10 p-4 text-[#22C55E]">
          {icon}
        </div>

        <span className="rounded-xl bg-[#22C55E]/10 px-3 py-2 text-sm font-black text-[#22C55E]">
          {growth}
        </span>
      </div>

      <p className="mt-6 text-sm text-white/45">
        {title}
      </p>

      <h3 className="mt-2 text-4xl font-black">
        {value}
      </h3>
    </div>
  );
}

function Vehicle({ name, count, image }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <img
        src={image}
        alt={name}
        className="h-20 w-28 rounded-2xl object-cover"
      />

      <div>
        <h3 className="font-black">
          {name}
        </h3>

        <p className="mt-2 text-sm text-white/45">
          {count}
        </p>
      </div>
    </div>
  );
}

export default Reports;