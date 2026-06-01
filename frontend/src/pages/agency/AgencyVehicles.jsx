import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";
import AgencyLayout from "../../components/agency/AgencyLayout";
import { getVehicles } from "../../services/vehicleService";

function AgencyVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        const items = Array.isArray(data) ? data : data.data || [];

        const formattedVehicles = items.map((vehicle) => ({
          id: vehicle.id,
          name:
            vehicle.name ||
            `${vehicle.marque || ""} ${vehicle.modele || ""}`.trim(),
          category: vehicle.category || vehicle.categorie || "Voiture",
          price:
            vehicle.price ||
            vehicle.prix ||
            vehicle.prixParJour ||
            vehicle.prixJour ||
            vehicle.prix_jour ||
            0,
          status:
            vehicle.statutDisponibilite ||
            (vehicle.status === "disponible" ? "Disponible" : "Louée"),
          image: vehicle.image || "/images/cars/bmw-m4.jpg",
        }));

        setVehicles(formattedVehicles);
      } catch (error) {
        console.error("Erreur chargement véhicules agence:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <AgencyLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Gérez les véhicules de votre agence.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Véhicules agence
          </h1>
        </div>

        <Link
          to="/agency/vehicles/create"
          className="flex items-center gap-3 rounded-2xl bg-[#22C55E] px-6 py-4 font-black text-[#081C15] shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <Plus size={20} />
          Ajouter véhicule
        </Link>
      </div>

      {loading && (
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-sm font-bold text-[#22C55E]">
          Chargement des véhicules...
        </div>
      )}

      {!loading && vehicles.length === 0 && (
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-sm font-bold text-[#22C55E]">
          Aucun véhicule trouvé.
        </div>
      )}

      {!loading && vehicles.length > 0 && (
        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/45">
                      {vehicle.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {vehicle.name}
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-[#22C55E]/10 p-4 text-[#22C55E]">
                    <Car size={22} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">
                      Prix / jour
                    </p>

                    <p className="mt-2 text-2xl font-black text-[#22C55E]">
                      {vehicle.price} DH
                    </p>
                  </div>

                  <span
                    className={`rounded-xl px-4 py-2 text-xs font-black ${
                      vehicle.status === "Disponible"
                        ? "bg-[#22C55E]/10 text-[#22C55E]"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 py-3 font-bold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]">
                    <Pencil size={18} />
                    Modifier
                  </button>

                  <button className="flex items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 px-5 text-red-400 transition hover:bg-red-500 hover:text-white">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AgencyLayout>
  );
}

export default AgencyVehicles;