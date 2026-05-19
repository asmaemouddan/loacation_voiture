import { motion } from "framer-motion";

function Panel({
  title,
  action,
  children,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black">
          {title}
        </h3>

        {action && (
          <button className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/70">
            {action}
          </button>
        )}
      </div>

      {children}
    </motion.div>
  );
}

export default Panel;