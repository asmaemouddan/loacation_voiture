import { motion } from "framer-motion";
import {
  Car,
  ScanLine,
  UserCheck,
  CheckCircle2,
  CreditCard,
} from "lucide-react";

function ReservationSteps() {
  const steps = [
    {
      icon: <Car />,
      number: "01",
      title: "Choisir véhicule",
      text: "Sélectionnez le véhicule disponible selon vos besoins.",
    },
    {
      icon: <ScanLine />,
      number: "02",
      title: "Scanner CIN / Permis",
      text: "Scannez votre document afin d’extraire automatiquement les informations.",
    },
    {
      icon: <UserCheck />,
      number: "03",
      title: "Profil auto-rempli",
      text: "Les données extraites remplissent automatiquement votre profil.",
    },
    {
      icon: <CheckCircle2 />,
      number: "04",
      title: "Valider réservation",
      text: "Confirmez les dates, l’agence et les informations de réservation.",
    },
    {
      icon: <CreditCard />,
      number: "05",
      title: "Effectuer paiement",
      text: "Finalisez la réservation avec le paiement.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FAF8] px-6 py-28 text-[#081C15] transition-colors duration-500 dark:bg-black dark:text-white">
      <div className="absolute left-[-15%] top-20 h-[520px] w-[520px] rounded-full bg-[#2E6B4E]/10 blur-[160px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#2E6B4E]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#2E6B4E]">
            Processus
          </p>

          <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Réserver devient
            <span className="block text-[#2E6B4E]">
              simple et rapide.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#081C15]/55 dark:text-white/50">
            Un parcours clair basé sur le choix du véhicule, le scan OCR,
            la validation et le paiement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#2E6B4E]/10 bg-white/70 p-6 backdrop-blur-2xl transition dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="absolute right-5 top-5 text-5xl font-black text-[#2E6B4E]/10 dark:text-white/[0.04]">
                {step.number}
              </div>

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#2E6B4E]/10 text-[#22C55E] transition group-hover:bg-[#2E6B4E] group-hover:text-white">
                {step.icon}
              </div>

              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#2E6B4E]">
                Étape {step.number}
              </p>

              <h3 className="text-xl font-black">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#081C15]/50 dark:text-white/45">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReservationSteps;