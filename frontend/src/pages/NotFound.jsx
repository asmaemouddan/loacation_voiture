import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/backgrounds/404-bg.jpg"
        alt="404"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GREEN GLOW */}
      <div className="absolute bottom-[-120px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#22C55E]/20 blur-[120px]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 text-center"
      >
        {/* LOGO */}
        <p className="mb-6 text-sm font-black uppercase tracking-[0.6em] text-white/80">
          RENTI<span className="text-[#22C55E]">VO</span>
        </p>

        {/* 404 */}
        <h1 className="text-[120px] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] md:text-[220px]">
          4<span className="text-[#22C55E]">0</span>4
        </h1>

        {/* TITLE */}
        <h2 className="-mt-2 text-3xl font-black uppercase tracking-[0.35em] text-white md:text-5xl">
          Page Not Found
        </h2>

        {/* TEXT */}
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
          La route que vous recherchez n’existe pas.
          <br />
          Mais l’expérience premium Rentivo continue.
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full border border-[#22C55E]/40 bg-black/30 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#22C55E] backdrop-blur-xl transition hover:bg-[#22C55E] hover:text-[#081C15] hover:shadow-[0_0_40px_rgba(34,197,94,0.45)]"
        >
          Retour à l’accueil
          <ArrowRight size={18} />
        </Link>

        {/* FEATURES */}
        <div className="mt-16 grid gap-6 text-left md:grid-cols-3">
          <Feature
            title="Voitures d’exception"
            text="Des modèles premium et sportifs."
          />

          <Feature
            title="Réservation rapide"
            text="Réservez votre véhicule en quelques clics."
          />

          <Feature
            title="Expérience premium"
            text="Service haut de gamme et sécurisé."
          />
        </div>
      </motion.div>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
      <div className="mb-4 h-2 w-14 rounded-full bg-[#22C55E]" />

      <h3 className="text-lg font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-white/55">
        {text}
      </p>
    </div>
  );
}

export default NotFound;