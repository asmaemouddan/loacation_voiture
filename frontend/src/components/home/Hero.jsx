import { useContext } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

function Hero() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <motion.img
        src="/images/auth/login-car.jpg"
        alt="Luxury Porsche"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2 }}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.58] contrast-125 saturate-110"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />

      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-16 top-24 h-[380px] w-[380px] rounded-full bg-[#2E6B4E]/20 blur-[130px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#3C8A64]">
            {t.hero.badge}
          </p>

          <h1 className="text-6xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl">
            {t.hero.title1}

            <span className="block text-[#2E6B4E]">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            {t.hero.text}
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link to="/vehicles">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 rounded-full  px-9 py-4 text-sm font-black uppercase tracking-wide bg-[#22C55E] text-[#081C15] shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:bg-[#3C8A64]"
              >
                {t.hero.reserve}

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </motion.button>
            </Link>


          </div>

          <div className="mt-16 flex flex-wrap gap-12">
            <Stat number="50+" label={t.hero.stat1} />
            <Stat number="24/7" label={t.hero.stat2} />
            <Stat number="2 min" label={t.hero.stat3} />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="min-w-[140px]">
      <p className="text-4xl font-black text-[#2E6B4E]">
        {number}
      </p>

      <p className="mt-2 text-sm font-medium text-white/55">
        {label}
      </p>
    </motion.div>
  );
}

export default Hero;