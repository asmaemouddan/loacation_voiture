import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import { LanguageContext } from "../context/LanguageContext";
import { login, saveAuth } from "../services/authService";

function Login() {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const data = await login({
        email,
        password,
      });

      saveAuth(data);

      if (data.user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Erreur login:", err.response?.data || err);
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={t.login.title}
      subtitle={t.login.subtitle}
      image="/images/auth/login-car.jpg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-bold text-red-400">
            {error}
          </div>
        )}

        <Input
          icon={<Mail size={18} />}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <Input
          icon={<Lock size={18} />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t.login.password}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-white/55">
            <input type="checkbox" className="accent-[#22C55E]" />
            {t.login.remember}
          </label>

          <button type="button" className="font-semibold text-[#22C55E]">
            {t.login.forgot}
          </button>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Connexion..." : t.login.button}
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </motion.button>
      </form>

      <p className="mt-8 text-center text-sm text-white/55">
        {t.login.noAccount}{" "}
        <Link to="/register" className="font-black text-[#22C55E]">
          {t.login.createAccount}
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

export default Login;