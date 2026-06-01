import { useEffect, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Fuel,
  Building2,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import { getVehicles } from "../../services/vehicleService";

function VehiclesManagement() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        const items = Array.isArray(data) ? data : data.data || [];

        const formattedVehicles = items.map((vehicle) => ({
          id: vehicle.id,
          marque: vehicle.marque || "",
          modele: vehicle.modele || "",
          immatriculation: vehicle.immatriculation || vehicle.matricule || "",
          carburant: vehicle.carburant || "Essence",
          prixParJour:
            vehicle.prixParJour ||
            vehicle.prixJour ||
            vehicle.prix_jour ||
            vehicle.prix ||
            0,
          statutDisponibilite:
            vehicle.statutDisponibilite ||
            (vehicle.status === "disponible" ? "Disponible" : "Louée"),
          agence:
            vehicle.agence ||
            vehicle.agence_nom ||
            `Agence #${vehicle.agence_id || ""}`,
          image: vehicle.image || "/images/cars/bmw-m4.jpg",
        }));

        setVehicles(formattedVehicles);
      } catch (error) {
        console.error("Erreur chargement véhicules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) => {
    const value = search.toLowerCase();

    return (
      vehicle.marque.toLowerCase().includes(value) ||
      vehicle.modele.toLowerCase().includes(value) ||
      vehicle.immatriculation.toLowerCase().includes(value) ||
      vehicle.agence.toLowerCase().includes(value)
    );
  });

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Gestion des véhicules enregistrés sur la plateforme.
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
            Gestion des véhicules
          </h1>
        </div>
      </div>

      <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <Search size={18} className="text-white/35" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un véhicule..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {loading && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Chargement des véhicules...
          </div>
        )}

        {!loading && filteredVehicles.length === 0 && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Aucun véhicule trouvé.
          </div>
        )}

        {!loading && filteredVehicles.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[1200px] border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-sm uppercase tracking-[0.2em] text-white/35">
                  <th className="pb-4">Véhicule</th>
                  <th className="pb-4">Immatriculation</th>
                  <th className="pb-4">Carburant</th>
                  <th className="pb-4">Agence</th>
                  <th className="pb-4">Prix / jour</th>
                  <th className="pb-4">Disponibilité</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="bg-black/20"
                  >
                    <td className="rounded-l-2xl px-5 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={vehicle.image}
                          alt={vehicle.modele}
                          className="h-20 w-32 rounded-2xl object-cover"
                        />

                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-[#22C55E]">
                            {vehicle.marque}
                          </p>

                          <h3 className="mt-2 text-xl font-black">
                            {vehicle.modele}
                          </h3>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 font-bold text-white/70">
                      {vehicle.immatriculation}
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2 text-white/70">
                        <Fuel size={16} className="text-[#22C55E]" />
                        {vehicle.carburant}
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2 text-white/70">
                        <Building2 size={16} className="text-[#22C55E]" />
                        {vehicle.agence}
                      </div>
                    </td>

                    <td className="px-5 py-5 font-black text-[#22C55E]">
                      {vehicle.prixParJour} DH
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`rounded-xl px-4 py-2 text-xs font-black ${
                          vehicle.statutDisponibilite === "Disponible"
                            ? "bg-[#22C55E]/10 text-[#22C55E]"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {vehicle.statutDisponibilite}
                      </span>
                    </td>

                    <td className="rounded-r-2xl px-5 py-5">
                      <div className="flex items-center gap-3">
                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:border-[#22C55E]/20 hover:text-[#22C55E]">
                          <Eye size={18} />
                        </button>

                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:border-red-500/20 hover:text-red-400">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default VehiclesManagement;