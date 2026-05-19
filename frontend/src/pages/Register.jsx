import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, ArrowRight } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import { LanguageContext } from "../context/LanguageContext";

function Register() {
  const { t } = useContext(LanguageContext);

  return (
    <AuthLayout
      title={t.register.title}
      subtitle={t.register.subtitle}
      image="/images/auth/register-car.jpg"
    >
      <form className="space-y-5">
        <Input icon={<User size={18} />} type="text" placeholder="Nom" />
        <Input icon={<User size={18} />} type="text" placeholder="Prénom" />
        <Input icon={<Mail size={18} />} type="email" placeholder={t.register.email} />
        <Input icon={<Phone size={18} />} type="text" placeholder={t.register.phone} />
        <Input icon={<Lock size={18} />} type="password" placeholder={t.register.password} />

        <Input
          icon={<Lock size={18} />}
          type="password"
          placeholder="Confirmer le mot de passe"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-4 font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)] transition hover:bg-[#D8F3DC]"
        >
          {t.register.button}
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