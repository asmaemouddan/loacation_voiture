import {
  Search,
  Trash2,
  Eye,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

function UsersManagement() {
  const users = [
    {
      id: 1,
      nom: "Amrani",
      prenom: "Laila",
      email: "laila@gmail.com",
      telephone: "+212 6 12 34 56 78",
      type: "Client",
      image: "/images/admin/admin.jpg",
    },

    {
      id: 2,
      nom: "Alami",
      prenom: "Yassine",
      email: "yassine@gmail.com",
      telephone: "+212 6 88 77 66 55",
      type: "Administrateur",
      image: "/images/admin/admin.jpg",
    },

    {
      id: 3,
      nom: "Bennani",
      prenom: "Sara",
      email: "sara@gmail.com",
      telephone: "+212 6 44 11 22 33",
      type: "Responsable agence",
      image: "/images/admin/admin.jpg",
    },
  ];

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
        {/* SEARCH */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <Search size={18} className="text-white/35" />

          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
          />
        </div>

        {/* TABLE */}
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
              {users.map((user) => (
                <tr key={user.id} className="bg-black/20">
                  {/* USER */}
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

                  {/* EMAIL */}
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-2 text-white/70">
                      <Mail size={16} className="text-[#22C55E]" />
                      {user.email}
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-2 text-white/70">
                      <Phone size={16} className="text-[#22C55E]" />
                      {user.telephone}
                    </div>
                  </td>

                  {/* TYPE */}
                  <td className="px-5 py-5">
                    <span className="rounded-xl bg-[#22C55E]/10 px-4 py-2 text-xs font-black text-[#22C55E]">
                      {user.type}
                    </span>
                  </td>

                  {/* ACTIONS */}
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
      </div>
    </AdminLayout>
  );
}

export default UsersManagement;