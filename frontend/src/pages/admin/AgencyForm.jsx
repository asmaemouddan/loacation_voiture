import {
  Building2,
  MapPin,
  Phone,
  Mail,
  UserRound,
  Save,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

function AgencyForm() {
  return (
    <AdminLayout>
      <div className="mt-8">
        <Link
          to="/admin/agencies"
          className="mb-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.25em] text-[#22C55E]"
        >
          <ArrowLeft size={18} />
          Retour
        </Link>

        <div>
          <p className="text-sm text-white/45">
            Ajoutez une nouvelle agence à la plateforme.
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
            Ajouter une agence
          </h1>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_0.75fr]">
          {/* FORM */}
          <form className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <p className="mb-8 text-xs font-black uppercase tracking-[0.35em] text-[#22C55E]">
              Informations agence
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                icon={<Building2 size={18} />}
                label="Nom agence"
                placeholder="Rentivo Fès Centre"
              />

              <Input
                icon={<MapPin size={18} />}
                label="Ville"
                placeholder="Fès"
              />

              <Input
                icon={<MapPin size={18} />}
                label="Adresse"
                placeholder="Avenue Hassan II"
              />

              <Input
                icon={<Phone size={18} />}
                label="Téléphone"
                placeholder="+212 6 12 34 56 78"
              />

              <Input
                icon={<Mail size={18} />}
                label="Email"
                placeholder="fes@rentivo.com"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/50">
                  Responsable agence
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                  <UserRound
                    size={18}
                    className="text-[#22C55E]"
                  />

                  <select className="w-full bg-transparent text-sm text-white outline-none">
                    <option className="bg-black">
                      Choisir responsable
                    </option>

                    <option className="bg-black">
                      Yassine Alami
                    </option>

                    <option className="bg-black">
                      Sara Bennani
                    </option>

                    <option className="bg-black">
                      Laila Amrani
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-4 font-black text-[#081C15] shadow-[0_0_30px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC]"
            >
              <Save size={20} />
              Enregistrer agence
            </button>
          </form>

          {/* SIDE CARD */}
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
              <Building2 size={28} />
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#22C55E]">
              Rentivo
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em]">
              Nouvelle
              <span className="block text-[#22C55E]">
                agence.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/55">
              Ajoutez une agence afin de gérer les véhicules,
              réservations et responsables.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Gestion
                </p>

                <p className="mt-2 font-black">
                  Véhicules & Réservations
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Responsable
                </p>

                <p className="mt-2 font-black">
                  Responsable agence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function Input({ icon, label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/50">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 focus-within:border-[#22C55E]/40">
        <span className="text-[#22C55E]">
          {icon}
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
        />
      </div>
    </div>
  );
}

export default AgencyForm;