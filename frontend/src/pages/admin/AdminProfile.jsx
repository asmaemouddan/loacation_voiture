import {
  Camera,
  Mail,
  Phone,
  ShieldCheck,
  Save,
  Lock,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

function AdminProfile() {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const userName = user?.name || "Administrateur";
  const userEmail = user?.email || "admin@gmail.com";
  const userRole =
    user?.role === "admin"
      ? "Administrateur plateforme"
      : user?.role || "Administrateur plateforme";

  const initial = userName.charAt(0).toUpperCase();

  const nameParts = userName.split(" ");
  const firstName = nameParts[0] || "Admin";
  const lastName = nameParts.slice(1).join(" ") || "";

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
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#22C55E]/10 text-6xl font-black text-[#22C55E] ring-4 ring-[#081C15]/10 dark:ring-[#22C55E]/20">
              {initial}
            </div>

            <button
              type="button"
              className="absolute bottom-2 right-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#081C15] text-white shadow-[0_0_30px_rgba(8,28,21,0.25)] dark:bg-[#22C55E] dark:text-[#081C15]"
            >
              <Camera size={22} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-black">
              {userName}
            </h2>

            <p className="mt-2 text-[#081C15]/45 dark:text-white/45">
              {userRole}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Info
              icon={<Mail size={18} />}
              text={userEmail}
            />

            <Info
              icon={<Phone size={18} />}
              text="Téléphone non défini"
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

            <button
              type="button"
              className="flex items-center gap-3 rounded-2xl bg-[#081C15] px-6 py-4 font-black text-white shadow-[0_0_25px_rgba(8,28,21,0.25)] transition hover:bg-[#0B3D2E] dark:bg-[#22C55E] dark:text-[#081C15] dark:hover:bg-[#D8F3DC]"
            >
              <Save size={20} />
              Sauvegarder
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Input label="Nom" value={lastName || userName} />
            <Input label="Prénom" value={firstName} />
            <Input label="Email" value={userEmail} />
            <Input label="Téléphone" value="Non défini" />

            <Input
              label="Mot de passe"
              value=""
              placeholder="Nouveau mot de passe"
              type="password"
              icon={<Lock size={18} />}
            />

            <Input
              label="Confirmer mot de passe"
              value=""
              placeholder="Confirmer le mot de passe"
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
  placeholder,
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
          placeholder={placeholder}
          className="w-full bg-transparent text-[#081C15] outline-none placeholder:text-[#081C15]/35 dark:text-white dark:placeholder:text-white/35"
        />
      </div>
    </div>
  );
}

export default AdminProfile;