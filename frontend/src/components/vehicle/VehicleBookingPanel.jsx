import { motion } from "framer-motion";
import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";

function VehicleBookingPanel({ car, onReserve }) {
  return (
    <section className="bg-white px-6 py-24 text-[#081C15] transition-colors duration-500 dark:bg-[#020403] dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.45em] text-[#22C55E]">
            Car Details
          </p>

          <h2 className="text-5xl font-black tracking-[-0.06em]">
            {car.name}
          </h2>

          <div className="mt-8 space-y-4">
            <Row label="Année" value={car.year} />
            <Row label="Transmission" value={car.transmission} />
            <Row label="Carburant" value={car.fuel} />
            <Row label="Places" value={`${car.seats} places`} />
            <Row label="Catégorie" value={car.category} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.45em] text-[#22C55E]">
            Booking
          </p>

          <h3 className="text-4xl font-black">
            {car.price} DH
            <span className="ml-2 text-base text-[#081C15]/45 dark:text-white/45">
              / jour
            </span>
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Input label="Date début" type="date" icon={<CalendarDays />} />
            <Input label="Date fin" type="date" icon={<CalendarDays />} />
            <Input label="Lieu départ" icon={<MapPin />} />
            <Input label="Lieu retour" icon={<MapPin />} />
          </div>

          <div className="mt-6 rounded-[2rem] border border-[#22C55E]/20 bg-[#22C55E]/10 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#22C55E]" />
              <div>
                <p className="font-black text-[#22C55E]">
                  Validation administrateur
                </p>
                <p className="mt-1 text-sm text-[#081C15]/50 dark:text-white/50">
                  Votre demande sera vérifiée avant confirmation.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onReserve}
            className="mt-6 w-full rounded-full bg-[#22C55E] px-8 py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC]"
          >
            Réserver maintenant
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-black/10 pb-3 text-sm dark:border-white/10">
      <span className="text-[#081C15]/50 dark:text-white/50">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-[#22C55E]">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-black/30">
        <span className="text-[#22C55E]">{icon}</span>
        <input
          {...props}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </div>
  );
}

export default VehicleBookingPanel;