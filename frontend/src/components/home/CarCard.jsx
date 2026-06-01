import { motion } from "framer-motion";
import { ArrowUpRight, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  const image = car.image || "/images/cars/bmw-m4.jpg";
  const title = car.name || `${car.marque || ""} ${car.modele || ""}`.trim();
  const prix = car.prixParJour || car.prixJour || car.prix_jour || car.prix || 0;
  const immatriculation = car.immatriculation || car.matricule || "";
  const statut =
    car.statutDisponibilite ||
    (car.status === "disponible" ? "Disponible" : "Louée");
  const carburant = car.carburant || "Essence";
  const agence = car.agence || car.agence_nom || "";

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-colors duration-500 dark:bg-black dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-[430px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent dark:from-black/95" />

        <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#22C55E] backdrop-blur-xl dark:border-white/15 dark:bg-black/50">
          {statut}
        </div>

        <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#081C15] backdrop-blur-xl dark:bg-white/10 dark:text-white">
          <Fuel size={15} className="text-[#22C55E]" />
          {carburant}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-[#22C55E]">
            {car.marque}
          </p>

          <h3 className="text-4xl font-black leading-none tracking-[-0.04em] text-white dark:text-white">
            {car.modele}
          </h3>

          <p className="mt-3 text-sm text-white/55 dark:text-white/45">
            {[agence, immatriculation].filter(Boolean).join(" • ")}
          </p>

          <div className="mt-5">
            <p className="text-sm text-white/60">Prix / jour</p>

            <p className="text-3xl font-black text-white">
              <span className="mr-1 text-lg text-[#2E6B4E]">
                À partir de
              </span>
              {prix}
              <span className="ml-1 text-lg text-[#22C55E]">DH</span>
            </p>
          </div>

          <Link to={`/vehicles/${car.id}`} className="block w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-6 py-4 font-bold text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.35)] transition-all duration-300 hover:bg-[#16A34A]"
            >
              Découvrir le véhicule
              <ArrowUpRight size={20} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default CarCard;