import { motion } from "framer-motion";
import { Car } from "lucide-react";

function ReserveCTA({ onReserve }) {
  return (
    <section className="bg-black px-6 pb-24 pt-10 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-[#22C55E]/20 bg-black p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,197,94,0.08)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#22C55E]">
              Réservation
            </p>

            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Prêt pour votre
              <span className="block text-[#2E6B4E]">
                prochaine aventure ?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">
              Réservez votre véhicule en quelques étapes .
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReserve}
              className="flex items-center gap-4 rounded-full bg-[#22C55E] px-10 py-5 text-sm font-black uppercase tracking-wide text-[#081C15] shadow-[0_0_45px_rgba(34,197,94,0.35)] transition hover:bg-[#D8F3DC]"
            >
              Réserver maintenant
              <Car size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReserveCTA;