import { motion } from "framer-motion";

function StatCard({
  icon,
  label,
  value,
  growth,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/55">
            {label}
          </p>

          <p className="mt-3 text-3xl font-black">
            {value}
          </p>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E]">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm font-bold text-[#22C55E]">
        ↗ {growth} ce mois
      </p>
    </motion.div>
  );
}

export default StatCard;