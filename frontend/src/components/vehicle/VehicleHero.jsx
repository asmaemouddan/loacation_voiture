import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
function VehicleHero({ car }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      
      <motion.img
        src={car.image}
        alt={car.name}
        initial={{ scale: 1.18, x: 120 }}
        animate={{
          scale: [1.18, 1.03, 1.12],
          x: [120, 0, -40],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.75] contrast-125 saturate-125"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020403] via-transparent to-transparent" />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-1/2 h-32 w-[75%] -translate-x-1/2 rounded-full bg-[#22C55E]/20 blur-[80px]"
      />
    </section>
  );
}

export default VehicleHero;