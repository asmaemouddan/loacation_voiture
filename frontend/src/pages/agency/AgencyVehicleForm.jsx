import { useState } from "react";
import {
  Car,
  Fuel,
  BadgeCheck,
  Image,
  Save,
  Building2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import AgencyLayout from "../../components/agency/AgencyLayout";
import api from "../../api/axios";

function AgencyVehicleForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    marque: "",
    modele: "",
    matricule: "",
    carburant: "",
    prix_jour: "",
    status: "disponible",
    agence_id: "1",
    image: "",
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (file) => {
    if (!file) {
      return;
    }

    handleChange("image", `/images/cars/${file.name}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await api.post("/vehicules", {
        marque: formData.marque,
        modele: formData.modele,
        matricule: formData.matricule,
        carburant: formData.carburant,
        prix_jour: Number(formData.prix_jour),
        status: formData.status,
        agence_id: Number(formData.agence_id),
        image: formData.image || "/images/cars/bmw-m4.jpg",
      });

      navigate("/agency/vehicles");
    } catch (error) {
      console.error("Erreur création véhicule:", error.response?.data || error);
      alert("Impossible d'enregistrer le véhicule.");
    } finally {
      setSaving(false);
    }
  };

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

      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            icon={<Car size={18} />}
            label="Marque"
            placeholder="BMW"
            value={formData.marque}
            onChange={(value) => handleChange("marque", value)}
          />

          <Input
            icon={<Car size={18} />}
            label="Modèle"
            placeholder="M4 Competition"
            value={formData.modele}
            onChange={(value) => handleChange("modele", value)}
          />

          <Input
            icon={<BadgeCheck size={18} />}
            label="Immatriculation"
            placeholder="123456-A-1"
            value={formData.matricule}
            onChange={(value) => handleChange("matricule", value)}
          />

          <Input
            icon={<Fuel size={18} />}
            label="Carburant"
            placeholder="Essence"
            value={formData.carburant}
            onChange={(value) => handleChange("carburant", value)}
          />

          <Input
            icon={<BadgeCheck size={18} />}
            label="Prix par jour"
            placeholder="1800"
            value={formData.prix_jour}
            onChange={(value) => handleChange("prix_jour", value)}
          />

          <div>
            <label className="mb-2 block text-sm font-bold text-white/55">
              Statut disponibilité
            </label>

            <select
              value={formData.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none"
            >
              <option value="disponible">Disponible</option>
              <option value="indisponible">Louée</option>
            </select>
          </div>

          <Input
            icon={<Building2 size={18} />}
            label="ID agence"
            placeholder="1"
            value={formData.agence_id}
            onChange={(value) => handleChange("agence_id", value)}
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
                {formData.image || "Choisir une image"}
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files?.[0])}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="mt-8 flex items-center gap-3 rounded-2xl bg-[#22C55E] px-8 py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={20} />
          {saving ? "Enregistrement..." : "Enregistrer véhicule"}
        </button>
      </form>
    </AgencyLayout>
  );
}

function Input({ icon, label, placeholder, value, onChange }) {
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
        />
      </div>
    </div>
  );
}

export default AgencyVehicleForm;