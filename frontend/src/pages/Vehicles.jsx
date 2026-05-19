import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CarCard from "../components/home/CarCard";
import { cars } from "../data/cars";

function Vehicles() {
  const [search, setSearch] = useState("");
  const [marque, setMarque] = useState("");
  const [carburant, setCarburant] = useState("");
  const [statut, setStatut] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchSearch =
      car.marque.toLowerCase().includes(search.toLowerCase()) ||
      car.modele.toLowerCase().includes(search.toLowerCase()) ||
      car.immatriculation.toLowerCase().includes(search.toLowerCase());

    return (
      matchSearch &&
      (marque === "" || car.marque === marque) &&
      (carburant === "" || car.carburant === carburant) &&
      (statut === "" || car.statutDisponibilite === statut)
    );
  });

  return (
    <main className="min-h-screen bg-[#F7FAF8] text-[#081C15] transition-colors duration-500 dark:bg-black dark:text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute left-[-12%] top-20 h-[420px] w-[420px] rounded-full bg-[#22C55E]/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-32 h-[500px] w-[500px] rounded-full bg-[#2E6B4E]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#2E6B4E]">
              Catalogue
            </p>

            <h1 className="mx-auto max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl">
              Découvrez
              <span className="block text-[#2E6B4E]">
                Nos Véhicules
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#081C15]/55 dark:text-white/55">
              Une sélection premium de véhicules soigneusement choisis pour
              vos déplacements, vos voyages et vos moments d’exception.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-12 rounded-[2.5rem] border border-[#2E6B4E]/10 bg-white/75 p-5 shadow-[0_25px_80px_rgba(8,28,21,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div className="flex items-center gap-3 rounded-2xl border border-[#2E6B4E]/10 bg-white px-5 py-4 transition focus-within:border-[#22C55E]/50 dark:border-white/10 dark:bg-black/40">
                <Search size={20} className="text-[#22C55E]" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher par marque, modèle ou immatriculation..."
                  className="w-full bg-transparent text-sm font-medium text-[#081C15] outline-none placeholder:text-[#081C15]/35 dark:text-white dark:placeholder:text-white/35"
                />
              </div>

              <Filter label="Marque" value={marque} onChange={setMarque}>
                <option className="bg-white text-[#081C15]" value="">
                  Toutes les marques
                </option>
                <option className="bg-white text-[#081C15]" value="Porsche">
                  Porsche
                </option>
                <option className="bg-white text-[#081C15]" value="BMW">
                  BMW
                </option>
                <option className="bg-white text-[#081C15]" value="Mercedes">
                  Mercedes
                </option>
              </Filter>

              <Filter
                label="Carburant"
                value={carburant}
                onChange={setCarburant}
              >
                <option className="bg-[#081C15] text-white" value="">
                  Tous carburants
                </option>
                <option className="bg-[#081C15] text-white" value="Essence">
                  Essence
                </option>
                <option className="bg-[#081C15] text-white" value="Diesel">
                  Diesel
                </option>
                <option className="bg-[#081C15] text-white" value="Hybride">
                  Hybride
                </option>
                <option className="bg-[#081C15] text-white" value="Électrique">
                  Électrique
                </option>
              </Filter>

              <Filter
                label="Disponibilité"
                value={statut}
                onChange={setStatut}
              >
                <option className="bg-[#081C15] text-white" value="">
                  Tous statuts
                </option>
                <option className="bg-[#081C15] text-white" value="Disponible">
                  Disponible
                </option>
                <option className="bg-[#081C15] text-white" value="Louée">
                  Louée
                </option>
              </Filter>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Filter({ label, value, onChange, children }) {
  return (
    <div className="rounded-2xl border border-[#2E6B4E]/10 bg-white px-5 py-3.5 transition focus-within:border-[#22C55E]/50 dark:border-white/10 dark:bg-black/40">
      <label className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.2em] text-[#22C55E]">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer bg-transparent text-sm font-semibold text-[#081C15] outline-none dark:text-white"
      >
        {children}
      </select>
    </div>
  );
}

export default Vehicles;