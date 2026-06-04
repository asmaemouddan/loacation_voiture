import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import { LanguageContext } from "../context/LanguageContext";
import { register, saveAuth } from "../services/authService";

function Register() {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.password_confirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      setLoading(true);

      const data = await register({
        name: `${formData.prenom} ${formData.nom}`.trim(),
        email: formData.email,
        password: formData.password,
      });

      saveAuth(data);
      navigate("/");
    } catch (err) {
      console.error("Erreur register:", err.response?.data || err);
      setError(
        err.response?.data?.message ||
          "Impossible de créer le compte. Vérifiez les informations."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={t.register.title}
      subtitle={t.register.subtitle}
      image="/images/auth/register-car.jpg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-bold text-red-400">
            {error}
          </div>
        )}

        <Input
          icon={<User size={18} />}
          type="text"
          placeholder="Nom"
          value={formData.nom}
          onChange={(e) => handleChange("nom", e.target.value)}
          required
        />

        <Input
          icon={<User size={18} />}
          type="text"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={(e) => handleChange("prenom", e.target.value)}
          required
        />

        <Input
          icon={<Mail size={18} />}
          type="email"
          placeholder={t.register.email}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />

        <Input
          icon={<Lock size={18} />}
          type="password"
          placeholder={t.register.password}
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          required
        />

        <Input
          icon={<Lock size={18} />}
          type="password"
          placeholder="Confirmer le mot de passe"
          value={formData.password_confirmation}
          onChange={(e) =>
            handleChange("password_confirmation", e.target.value)
          }
          required
        />

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Création..." : t.register.button}
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </motion.button>
      </form>

      <p className="mt-8 text-center text-sm text-white/55">
        {t.register.haveAccount}{" "}
        <Link to="/login" className="font-black text-[#22C55E]">
          {t.register.login}
        </Link>
      </p>
    </AuthLayout>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white/70 transition focus-within:border-[#22C55E]/40 focus-within:bg-white/15">
      <span className="text-[#22C55E]">{icon}</span>
      <input
        {...props}
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
      />
    </div>
  );
}

export default Register;