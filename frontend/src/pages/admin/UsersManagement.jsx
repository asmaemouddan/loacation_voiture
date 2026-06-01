import { useEffect, useState } from "react";
import {
  Search,
  Trash2,
  Eye,
  Mail,
  Phone,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import api from "../../api/axios";

function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get("/clients");
        const data = response.data;
        const items = Array.isArray(data) ? data : data.data || [];

        const formattedUsers = items.map((user) => {
          const fullName = user.name || "";
          const parts = fullName.split(" ");

          return {
            id: user.id,
            nom: user.nom || parts.slice(1).join(" ") || "",
            prenom: user.prenom || parts[0] || fullName || "Client",
            email: user.email || "",
            telephone: user.telephone || user.phone || "Non défini",
            type:
              user.role === "admin"
                ? "Administrateur"
                : user.role === "client"
                ? "Client"
                : user.role || "Client",
            image: user.image || "/images/admin/admin.jpg",
          };
        });

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Erreur chargement clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const filteredUsers = users.filter((user) => {
    const value = search.toLowerCase();

    return (
      `${user.prenom} ${user.nom}`.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.telephone.toLowerCase().includes(value) ||
      user.type.toLowerCase().includes(value)
    );
  });

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Gestion des utilisateurs de la plateforme.
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
            Gestion des utilisateurs
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
            placeholder="Rechercher un utilisateur..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {loading && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Chargement des utilisateurs...
          </div>
        )}

        {!loading && filteredUsers.length === 0 && (
          <div className="mt-10 rounded-2xl bg-black/20 p-8 text-center text-sm font-bold text-[#22C55E]">
            Aucun utilisateur trouvé.
          </div>
        )}

        {!loading && filteredUsers.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[1100px] border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-sm uppercase tracking-[0.2em] text-white/35">
                  <th className="pb-4">Utilisateur</th>
                  <th className="pb-4">Email</th>
                  <th className="pb-4">Téléphone</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="bg-black/20">
                    <td className="rounded-l-2xl px-5 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={user.image}
                          alt={user.nom}
                          className="h-16 w-16 rounded-2xl object-cover"
                        />

                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-[#22C55E]">
                            {user.type}
                          </p>

                          <h3 className="mt-2 text-xl font-black">
                            {user.prenom} {user.nom}
                          </h3>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2 text-white/70">
                        <Mail size={16} className="text-[#22C55E]" />
                        {user.email}
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2 text-white/70">
                        <Phone size={16} className="text-[#22C55E]" />
                        {user.telephone}
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <span className="rounded-xl bg-[#22C55E]/10 px-4 py-2 text-xs font-black text-[#22C55E]">
                        {user.type}
                      </span>
                    </td>

                    <td className="rounded-r-2xl px-5 py-5">
                      <div className="flex items-center gap-3">
                        <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:border-[#22C55E]/20 hover:text-[#22C55E]">
                          <Eye size={18} />
                        </button>

                        <button className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white">
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

export default UsersManagement;