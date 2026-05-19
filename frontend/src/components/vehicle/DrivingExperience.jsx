import { motion } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

function DrivingExperience() {
  const features = [
    {
      icon: <Gauge size={28} />,
      title: "Performance",
      text: "Une conduite sportive avec accélération fluide et puissance premium.",
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Sécurité",
      text: "Technologies intelligentes pour une expérience sécurisée et moderne.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Confort",
      text: "Intérieur haut de gamme conçu pour le confort et l’élégance.",
    },

    {
      icon: <Zap size={28} />,
      title: "Technologie",
      text: "Système intelligent avec expérience digitale moderne.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020403] px-6 py-24 text-white">
      <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#22C55E]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#22C55E]">
            Driving Experience
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Une expérience conçue
            <span className="block text-[#22C55E]">
              pour la performance.
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#22C55E]/10 text-[#22C55E] transition group-hover:bg-[#22C55E] group-hover:text-[#081C15]">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl lg:grid-cols-3">
          <Stat number="650+" label="Chevaux" />
          <Stat number="3.2s" label="0 → 100 km/h" />
          <Stat number="320" label="Vitesse max" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-[2rem] bg-black/30 p-8 text-center"
    >
      <p className="text-5xl font-black tracking-[-0.05em] text-[#22C55E]">
        {number}
      </p>

      <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-white/45">
        {label}
      </p>
    </motion.div>
  );
}

export default DrivingExperience;