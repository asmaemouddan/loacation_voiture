import { useEffect, useState } from "react";
import {
  CreditCard,
  CalendarDays,
  ShieldCheck,
  Wallet,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const reservation = location.state?.reservation || {};

  const [cardData, setCardData] = useState({
    holder: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const vehicleName =
    reservation.vehicle ||
    reservation.car ||
    reservation.vehicle_name ||
    "Véhicule réservé";

  const image = reservation.image || "/images/cars/bmw-m4.jpg";

  const dateDebut =
    reservation.date_debut ||
    reservation.dateDebut ||
    "Date début non définie";

  const dateFin =
    reservation.date_fin ||
    reservation.dateFin ||
    "Date fin non définie";

  const total =
    reservation.total ||
    reservation.prix_total ||
    reservation.price_total ||
    0;

  const isOcrVerifiedForCurrentUser = () => {
    const currentUser = getCurrentUser();

    return (
      localStorage.getItem("ocr_verified") === "true" &&
      String(localStorage.getItem("ocr_verified_user_id")) ===
        String(currentUser?.id)
    );
  };

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      alert("Veuillez vous connecter avant le paiement.");
      navigate("/login");
      return;
    }

    if (!isOcrVerifiedForCurrentUser()) {
      alert("Veuillez scanner et confirmer vos documents avant le paiement.");

      navigate("/profile", {
        state: {
          reservation,
          message: "Veuillez confirmer vos documents OCR avant le paiement.",
        },
      });
    }
  }, [navigate]);

  const handleChange = (field, value) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePayment = () => {
    setError("");

    if (!isOcrVerifiedForCurrentUser()) {
      alert("Veuillez scanner et confirmer vos documents avant le paiement.");
      navigate("/profile");
      return;
    }

    const cardNumber = cardData.number.replace(/\s/g, "");
    const cvv = cardData.cvv.trim();

    if (
      !cardData.holder.trim() ||
      !cardData.number.trim() ||
      !cardData.expiry.trim() ||
      !cardData.cvv.trim()
    ) {
      setError("Veuillez remplir toutes les informations de paiement.");
      return;
    }

    if (cardNumber.length < 12 || !/^[0-9]+$/.test(cardNumber)) {
      setError("Le numéro de carte est invalide.");
      return;
    }

    if (cvv.length < 3 || !/^[0-9]+$/.test(cvv)) {
      setError("Le CVV est invalide.");
      return;
    }

    alert("Paiement confirmé avec succès.");
    navigate("/my-reservations");
  };

  return (
    <main className="min-h-screen bg-[#070b0a] px-6 py-10 text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm text-white/45">
            Finalisez votre réservation en toute sécurité.
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">
            Paiement
          </h1>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
                  <Wallet size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Méthode de paiement
                  </h2>

                  <p className="text-sm text-white/45">
                    Choisissez votre mode de paiement préféré.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-5 py-4 text-sm font-bold text-[#22C55E]">
                <ShieldCheck size={18} />
                Documents OCR confirmés. Vous pouvez finaliser le paiement.
              </div>

              {error && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-bold text-red-400">
                  <AlertCircle size={18} />
                  {error}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-3">
                <Method title="Visa" active />
                <Method title="MasterCard" />
                <Method title="PayPal" />
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Input
                  label="Nom du titulaire"
                  placeholder="Nom complet"
                  value={cardData.holder}
                  onChange={(value) => handleChange("holder", value)}
                />

                <Input
                  label="Numéro de carte"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.number}
                  onChange={(value) => handleChange("number", value)}
                />

                <Input
                  label="Date expiration"
                  placeholder="08 / 29"
                  value={cardData.expiry}
                  onChange={(value) => handleChange("expiry", value)}
                />

                <Input
                  label="CVV"
                  placeholder="123"
                  value={cardData.cvv}
                  onChange={(value) => handleChange("cvv", value)}
                />
              </div>

              <motion.button
                onClick={handlePayment}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-5 text-lg font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle2 size={22} />
                Confirmer le paiement
              </motion.button>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-black">
                    Paiement sécurisé
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Toutes vos transactions sont sécurisées et protégées
                    grâce à notre système de chiffrement avancé.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <img
              src={image}
              alt={vehicleName}
              className="h-60 w-full rounded-[2rem] object-cover"
            />

            <div className="mt-6">
              <h2 className="text-3xl font-black">
                {vehicleName}
              </h2>

              <p className="mt-2 text-white/45">
                Véhicule sélectionné pour votre réservation.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <Info
                icon={<CalendarDays size={18} />}
                label="Date début"
                value={dateDebut}
              />

              <Info
                icon={<CalendarDays size={18} />}
                label="Date fin"
                value={dateFin}
              />

              <Info
                icon={<CreditCard size={18} />}
                label="Mode"
                value="Carte bancaire"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-6">
              <div className="flex items-center justify-between">
                <span className="text-white/55">
                  Total
                </span>

                <span className="text-4xl font-black text-[#22C55E]">
                  {total} DH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Method({ title, active }) {
  return (
    <button
      type="button"
      className={`rounded-2xl border px-5 py-5 text-center font-black transition ${
        active
          ? "border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E]"
          : "border-white/10 bg-black/20 text-white/60 hover:border-[#22C55E]/20 hover:text-[#22C55E]"
      }`}
    >
      {title}
    </button>
  );
}

function Input({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-3 block text-sm text-white/45">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-[#22C55E]/30"
      />
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
      <div className="flex items-center gap-3 text-white/55">
        {icon}
        {label}
      </div>

      <span className="font-bold">
        {value}
      </span>
    </div>
  );
}

export default Payment;