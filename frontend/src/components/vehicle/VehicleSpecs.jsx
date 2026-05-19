import { motion } from "framer-motion";
import {
  Car,
  Fuel,
  BadgeCheck,
  Building2,
  CreditCard,
  Hash,
} from "lucide-react";

function VehicleSpecs({ car }) {
  const specs = [
    { icon: <Car />, label: "Marque", value: car.marque },
    { icon: <Car />, label: "Modèle", value: car.modele },
    { icon: <Hash />, label: "Immatriculation", value: car.immatriculation },
    { icon: <Fuel />, label: "Carburant", value: car.carburant },
    { icon: <BadgeCheck />, label: "Disponibilité", value: car.statutDisponibilite },
    { icon: <Building2 />, label: "Agence", value: car.agence },
    { icon: <CreditCard />, label: "Prix / jour", value: `${car.prixParJour} DH` },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="absolute left-[-15%] top-20 h-[520px] w-[520px] rounded-full bg-[#22C55E]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#22C55E]">
              Fiche véhicule
            </p>

            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Informations
              <span className="block text-[#2E6B4E]">techniques.</span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#22C55E]/20 bg-[#22C55E]/10 px-8 py-5">
            <p className="text-sm text-white/50">Statut</p>
            <p className="mt-1 text-2xl font-black text-[#22C55E]">
              {car.statutDisponibilite}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -7 }}
              className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl ${
                item.label === "Prix / jour" ? "lg:col-span-3" : ""
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
                {item.icon}
              </div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
                {item.label}
              </p>

              <p className="mt-3 text-3xl font-black">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleSpecs;