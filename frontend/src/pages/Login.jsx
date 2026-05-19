import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import { LanguageContext } from "../context/LanguageContext";

function Login() {
  const { t } = useContext(LanguageContext);
  const [identifier, setIdentifier] = useState("");

  const isPhone = /^[0-9+\s]{8,}$/.test(identifier);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      login_type: isPhone ? "phone" : "email",
      identifier,
    };

    console.log(loginData);
  };

  return (
    <AuthLayout
      title={t.login.title}
      subtitle={t.login.subtitle}
      image="/images/auth/login-car.jpg"
    >
      <form onSubmit={handleSubmit} className="space-y-5 ">
        <Input
          icon={<Mail size={18} />}
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Email ou numéro de téléphone"
        />

        <Input icon={<Lock size={18} />} type="password" placeholder={t.login.password} />

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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC]"
        >
          {t.login.button}
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