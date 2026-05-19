function ProfileForm() {
  return (
    <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[#081C15]/45 dark:text-white/45">
            Paramètres utilisateur
          </p>

          <h2 className="mt-2 text-3xl font-black ">Informations compte</h2>
        </div>

        <button className="rounded-2xl bg-[#081C15] px-6 py-3 font-black text-white dark:bg-[#22C55E] dark:text-[#081C15]">
          Modifier profil
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 ">
        <Input label="Nom" value="El Amrani " />
        <Input label="Prénom" value="Asmae" />
        <Input label="Email" value="asmae@gmail.com" />
        <Input label="Téléphone" value="+212 6 12 34 56 78" />
        <Input label="Mot de passe" type="password" value="12345678" />
        <Input label="Confirmer mot de passe" type="password" value="12345678" />
      </div>
    </div>
  );
}

function Input({ label, value, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#081C15]/50 dark:text-white/45">
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-[#081C15] outline-none transition focus:border-[#081C15]/30 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:border-[#22C55E]/30"
      />
    </div>
  );
}

export default ProfileForm;