import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { getVehicles } from "../../services/vehicleService";
import CarCard from "./CarCard";

function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [marque, setMarque] = useState("");
  const [carburant, setCarburant] = useState("");
  const [statut, setStatut] = useState("");
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(true);

  const visibleCount = 3;

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        const vehicles = Array.isArray(data) ? data : data.data || [];

        const formattedCars = vehicles.map((car) => ({
          ...car,
          id: car.id,
          marque: car.marque || "",
          modele: car.modele || "",
          immatriculation: car.immatriculation || car.matricule || "",
          carburant: car.carburant || "Essence",
          statutDisponibilite:
            car.statutDisponibilite ||
            (car.status === "disponible" ? "Disponible" : "Louée"),
          prixJour: car.prixJour || car.prix_jour || car.prix || 0,
          prix_jour: car.prix_jour || car.prixJour || car.prix || 0,
          prix: car.prix || car.prix_jour || car.prixJour || 0,
          image: car.image || "/images/cars/bmw-m4.jpg",
          categorie: car.categorie || car.category || "Voiture",
          category: car.category || car.categorie || "Voiture",
          description: car.description || "",
          transmission: car.transmission || "Automatique",
          places: car.places || 5,
          agence_id: car.agence_id || null,
        }));

        setCars(formattedCars);
      } catch (error) {
        console.error("Erreur chargement véhicules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const filteredCars = cars.filter((car) => {
    const searchValue = search.toLowerCase();

    const matchSearch =
      (car.marque || "").toLowerCase().includes(searchValue) ||
      (car.modele || "").toLowerCase().includes(searchValue) ||
      (car.immatriculation || "").toLowerCase().includes(searchValue);

    return (
      matchSearch &&
      (marque === "" || car.marque === marque) &&
      (carburant === "" || car.carburant === carburant) &&
      (statut === "" || car.statutDisponibilite === statut)
    );
  });

  const visibleCars = filteredCars.slice(start, start + visibleCount);

  const marques = [...new Set(cars.map((car) => car.marque).filter(Boolean))];
  const carburants = [
    ...new Set(cars.map((car) => car.carburant).filter(Boolean)),
  ];
  const statuts = [
    ...new Set(cars.map((car) => car.statutDisponibilite).filter(Boolean)),
  ];

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
            {marques.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Filter>

          <Filter label="Carburant" value={carburant} onChange={setCarburant} setStart={setStart}>
            <option value="">Tous les carburants</option>
            {carburants.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Filter>

          <Filter label="Disponibilité" value={statut} onChange={setStatut} setStart={setStart}>
            <option value="">Tous les statuts</option>
            {statuts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Filter>
        </div>

        {loading && (
          <div className="rounded-[2rem] border border-[#2E6B4E]/10 bg-white/70 p-10 text-center text-sm font-bold text-[#2E6B4E] shadow-[0_25px_80px_rgba(8,28,21,0.08)] dark:border-white/10 dark:bg-white/[0.04]">
            Chargement des véhicules...
          </div>
        )}

        {!loading && filteredCars.length === 0 && (
          <div className="rounded-[2rem] border border-[#2E6B4E]/10 bg-white/70 p-10 text-center text-sm font-bold text-[#2E6B4E] shadow-[0_25px_80px_rgba(8,28,21,0.08)] dark:border-white/10 dark:bg-white/[0.04]">
            Aucun véhicule trouvé.
          </div>
        )}

        {!loading && filteredCars.length > 0 && (
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
        )}
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