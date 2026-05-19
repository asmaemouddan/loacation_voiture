import {
  Car,
  Fuel,
  BadgeCheck,
  Image,
  Save,
  Building2,
} from "lucide-react";

import AgencyLayout from "../../components/agency/AgencyLayout";

function AgencyVehicleForm() {
  return (
    <AgencyLayout>
      <div className="mt-8">
        <p className="text-sm text-white/45">
          Ajouter un nouveau véhicule à votre agence.
        </p>

        <h1 className="mt-2 text-5xl font-black tracking-[-0.05em]">
          Ajouter véhicule
        </h1>
      </div>

      <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            icon={<Car size={18} />}
            label="Marque"
            placeholder="BMW"
          />

          <Input
            icon={<Car size={18} />}
            label="Modèle"
            placeholder="M4 Competition"
          />

          <Input
            icon={<BadgeCheck size={18} />}
            label="Immatriculation"
            placeholder="123456-A-1"
          />

          <Input
            icon={<Fuel size={18} />}
            label="Carburant"
            placeholder="Essence"
          />

          <Input
            icon={<BadgeCheck size={18} />}
            label="Prix par jour"
            placeholder="1800 DH"
          />

          <div>
            <label className="mb-2 block text-sm font-bold text-white/55">
              Statut disponibilité
            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none">
              <option>Disponible</option>
              <option>Louée</option>
            </select>
          </div>

          <Input
            icon={<Building2 size={18} />}
            label="Nom agence"
            placeholder="Rento Fès"
          />

                    <div>
            <label className="mb-2 block text-sm font-bold text-white/55">
                Image véhicule
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition hover:border-[#22C55E]/40">
                <span className="text-[#22C55E]">
                <Image size={18} />
                </span>

                <span className="text-sm text-white/45">
                Choisir une image
                </span>

                <input
                type="file"
                accept="image/*"
                className="hidden"
                />
            </label>
            </div>
        </div>

        <button className="mt-8 flex items-center gap-3 rounded-2xl bg-[#22C55E] px-8 py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC]">
          <Save size={20} />
          Enregistrer véhicule
        </button>
      </div>
    </AgencyLayout>
  );
}

function Input({
  icon,
  label,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/55">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
        <span className="text-[#22C55E]">
          {icon}
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
        />
      </div>
    </div>
  );
}

export default AgencyVehicleForm;