import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Mail,
  ShieldCheck,
  User,
  BadgeCheck,
  ScanLine,
} from "lucide-react";

import OCRVerification from "../components/profile/OCRVerification";
import ProfileScanOCR from "../components/profile/ProfileScanOCR";
import { clearAuth, getProfile, logout } from "../services/authService";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error("Erreur profile:", error.response?.data || error);
        clearAuth();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Erreur logout:", error.response?.data || error);
    } finally {
      clearAuth();
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-10 text-[#081C15] dark:bg-[#070b0a] dark:text-white">
        <div className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-8 text-center text-sm font-bold text-[#22C55E] dark:border-white/10 dark:bg-white/[0.04]">
          Chargement du profil...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#081C15] transition-colors duration-500 dark:bg-[#070b0a] dark:text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.04] lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22C55E]">
              Profil connecté
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
              {user?.name || "Utilisateur"}
            </h1>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#081C15]/60 dark:text-white/55">
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-[#22C55E]" />
                {user?.email || "Email non défini"}
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#22C55E]" />
                {user?.role || "client"}
              </span>

              <span className="flex items-center gap-2">
                <User size={16} className="text-[#22C55E]" />
                ID #{user?.id}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 rounded-2xl bg-red-500/10 px-6 py-4 font-black text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>

        <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
          <section className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#22C55E]/10 text-[#22C55E]">
              <User size={42} />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              {user?.name || "Utilisateur"}
            </h2>

            <p className="mt-2 text-sm text-[#081C15]/50 dark:text-white/45">
              Compte {user?.role || "client"} enregistré dans la plateforme.
            </p>

            <div className="mt-6 space-y-4">
              <Info icon={<Mail size={18} />} label="Email" value={user?.email || "—"} />
              <Info icon={<ShieldCheck size={18} />} label="Rôle" value={user?.role || "client"} />
              <Info icon={<BadgeCheck size={18} />} label="Statut" value="Compte actif" />
            </div>
          </section>

          <section className="space-y-8">
            <div className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-[#22C55E]/10 p-4 text-[#22C55E]">
                  <ScanLine size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Vérification OCR
                  </h2>

                  <p className="mt-1 text-sm text-[#081C15]/50 dark:text-white/45">
                    Scanner CIN ou permis pour compléter automatiquement le profil.
                  </p>
                </div>
              </div>

              <ProfileScanOCR />
            </div>

            <OCRVerification />
          </section>
        </div>
      </div>
    </main>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/20">
      <div className="mb-2 flex items-center gap-2 text-[#22C55E]">
        {icon}
        <span className="text-xs font-black uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>

      <p className="font-bold text-[#081C15]/75 dark:text-white/75">
        {value}
      </p>
    </div>
  );
}

export default Profile;