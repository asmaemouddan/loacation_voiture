import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  MapPin,
  Phone,
  Mail,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import api from "../../api/axios";

function AgenciesManagement() {
  const [agencies, setAgencies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await api.get("/agences");
        const data = response.data;
        const items = Array.isArray(data) ? data : data.data || [];

        const formattedAgencies = items.map((agency) => ({
          id: agency.id,
          name: agency.name || agency.nom || "",
          city: agency.city || agency.ville || "",
          address: agency.address || agency.adresse || "",
          phone: agency.phone || agency.telephone || "",
          email: agency.email || "",
          manager:
            agency.manager ||
            agency.responsable ||
            agency.responsable_nom ||
            "Non défini",
        }));

        setAgencies(formattedAgencies);
      } catch (error) {
        console.error("Erreur chargement agences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencies();
  }, []);

  const filteredAgencies = agencies.filter((agency) => {
    const value = search.toLowerCase();

    return (
      agency.name.toLowerCase().includes(value) ||
      agency.city.toLowerCase().includes(value) ||
      agency.address.toLowerCase().includes(value) ||
      agency.email.toLowerCase().includes(value) ||
      agency.manager.toLowerCase().includes(value)
    );
  });

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Gérez les agences et responsables de votre plateforme.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Gestion des agences
          </h1>
        </div>

        <Link
          to="/admin/agencies/create"
          className="flex items-center gap-3 rounded-2xl bg-[#22C55E] px-6 py-4 font-black text-[#081C15] shadow-[0_0_30px_rgba(34,197,94,0.3)] transition hover:scale-[1.02]"
        >
          <Plus size={20} />
          Ajouter une agence
        </Link>
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <Search size={18} className="text-white/35" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une agence..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {loading && (
          <div className="mt-8 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Chargement des agences...
          </div>
        )}

        {!loading && filteredAgencies.length === 0 && (
          <div className="mt-8 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Aucune agence trouvée.
          </div>
        )}

        {!loading && filteredAgencies.length > 0 && (
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {filteredAgencies.map((agency) => (
              <div
                key={agency.id}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#22C55E]">
                      #{agency.id}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {agency.name}
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-[#22C55E]/10 p-4 text-[#22C55E]">
                    <MapPin size={22} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Info
                    icon={<MapPin size={16} />}
                    text={`${agency.city || "Ville non définie"} - ${
                      agency.address || "Adresse non définie"
                    }`}
                  />

                  <Info
                    icon={<Phone size={16} />}
                    text={agency.phone || "Téléphone non défini"}
                  />

                  <Info
                    icon={<Mail size={16} />}
                    text={agency.email || "Email non défini"}
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Responsable
                  </p>

                  <p className="mt-2 font-black">
                    {agency.manager}
                  </p>
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
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/60">
      <span className="text-[#22C55E]">
        {icon}
      </span>

      {text}
    </div>
  );
}

export default AgenciesManagement;