import {
  Camera,
  Mail,
  Phone,
  ShieldCheck,
  Lock,
  Save,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

function AdminProfile() {
  return (
    <AdminLayout>
      <div className="mt-8">
        <p className="text-sm text-[#081C15]/45 dark:text-white/45">
          Gérez les informations de votre compte administrateur.
        </p>

        <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
          Profil administrateur
        </h1>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[380px_1fr]">
        <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="relative mx-auto w-fit">
            <img
              src="/images/admin/admin.jpg"
              alt="Admin"
              className="h-44 w-44 rounded-full object-cover ring-4 ring-[#081C15]/10 dark:ring-[#22C55E]/20"
            />

            <button className="absolute bottom-2 right-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#081C15] text-white shadow-[0_0_30px_rgba(8,28,21,0.25)] dark:bg-[#22C55E] dark:text-[#081C15]">
              <Camera size={22} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-black">
              Admin Rentivo
            </h2>

            <p className="mt-2 text-[#081C15]/45 dark:text-white/45">
              Administrateur plateforme
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Info
              icon={<Mail size={18} />}
              text="admin@rentivo.com"
            />

            <Info
              icon={<Phone size={18} />}
              text="+212 6 99 88 77 66"
            />

            <Info
              icon={<ShieldCheck size={18} />}
              text="Accès administrateur"
            />
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-[#081C15]/45 dark:text-white/45">
                Informations administrateur
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Paramètres compte
              </h2>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-[#081C15] px-6 py-4 font-black text-white shadow-[0_0_25px_rgba(8,28,21,0.25)] transition hover:bg-[#0B3D2E] dark:bg-[#22C55E] dark:text-[#081C15] dark:hover:bg-[#D8F3DC]">
              <Save size={20} />
              Sauvegarder
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Input label="Nom" value="Admin" />
            <Input label="Prénom" value="Rentivo" />
            <Input label="Email" value="admin@rentivo.com" />
            <Input label="Téléphone" value="+212 6 99 88 77 66" />

            <Input
              label="Mot de passe"
              value="12345678"
              type="password"
              icon={<Lock size={18} />}
            />

            <Input
              label="Confirmer mot de passe"
              value="12345678"
              type="password"
              icon={<Lock size={18} />}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-[#081C15]/65 dark:border-white/10 dark:bg-black/20 dark:text-white/65">
      <span className="text-[#081C15] dark:text-[#22C55E]">
        {icon}
      </span>

      {text}
    </div>
  );
}

function Input({
  label,
  value,
  type = "text",
  icon,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#081C15]/50 dark:text-white/45">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-black/20">
        {icon && (
          <span className="text-[#081C15] dark:text-[#22C55E]">
            {icon}
          </span>
        )}

        <input
          type={type}
          defaultValue={value}
          className="w-full bg-transparent text-[#081C15] outline-none dark:text-white"
        />
      </div>
    </div>
  );
}

export default AdminProfile;