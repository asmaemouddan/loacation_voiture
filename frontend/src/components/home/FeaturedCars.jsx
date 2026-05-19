import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cars } from "../../data/cars";
import CarCard from "./CarCard";

function FeaturedCars() {
  const [search, setSearch] = useState("");
  const [marque, setMarque] = useState("");
  const [carburant, setCarburant] = useState("");
  const [statut, setStatut] = useState("");
  const [start, setStart] = useState(0);

  const visibleCount = 3;

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

  const visibleCars = filteredCars.slice(start, start + visibleCount);

  const next = () => {
    if (start + visibleCount < filteredCars.length) {
      setStart(start + visibleCount);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(Math.max(start - visibleCount, 0));
    }
  };

  return (
    <section
      id="vehicules"
      className="relative overflow-hidden bg-[#F7FAF8] px-6 py-32 text-[#081C15] transition-colors duration-500 dark:bg-black dark:text-white"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#2E6B4E]">
            Véhicules
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Liste des
            <span className="block text-[#2E6B4E]">véhicules.</span>
          </h2>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl items-center gap-4 rounded-full border border-[#2E6B4E]/15 bg-white px-6 py-5 shadow-[0_20px_70px_rgba(46,107,78,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
          <Search size={22} className=" text-[#22C55E]" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setStart(0);
            }}
            placeholder="Rechercher par marque, modèle ou immatriculation..."
            className="w-full bg-transparent text-sm font-bold text-[#081C15] outline-none placeholder:text-[#081C15]/35 dark:text-white dark:placeholder:text-white/35"
          />
        </div>

        <div className="mb-12 grid gap-4 rounded-[2rem] border border-[#2E6B4E]/10 bg-white/70 p-5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] md:grid-cols-3">
          <Filter label="Marque" value={marque} onChange={setMarque} setStart={setStart}>
            <option value="">Toutes les marques</option>
            <option value="Porsche">Porsche</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
          </Filter>

          <Filter label="Carburant" value={carburant} onChange={setCarburant} setStart={setStart}>
            <option value="">Tous les carburants</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybride">Hybride</option>
            <option value="Électrique">Électrique</option>
          </Filter>

          <Filter label="Disponibilité" value={statut} onChange={setStatut} setStart={setStart}>
            <option value="">Tous les statuts</option>
            <option value="Disponible">Disponible</option>
            <option value="Louée">Louée</option>
          </Filter>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            disabled={start === 0}
            className="absolute -left-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_0_30px_rgba(46,107,78,0.35)] disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={start + visibleCount >= filteredCars.length}
            className="absolute -right-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_0_30px_rgba(46,107,78,0.35)] disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Filter({ label, value, onChange, children, setStart }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.25em]  text-[#22C55E]">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setStart(0);
        }}
        className="w-full rounded-2xl border border-[#2E6B4E]/10 bg-white px-5 py-4 text-sm text-[#081C15] outline-none focus:border-[#2E6B4E]/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
      >
        {children}
      </select>
    </div>
  );
}

export default FeaturedCars;