import {
  CreditCard,
  CalendarDays,
  ShieldCheck,
  Wallet,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

function Payment() {
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
          {/* LEFT */}
          <div className="space-y-8">
            {/* PAYMENT METHODS */}
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

              <div className="grid gap-5 md:grid-cols-3">
                <Method title="Visa" active />
                <Method title="MasterCard" />
                <Method title="PayPal" />
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Input label="Nom du titulaire" placeholder="Asmae El Amrani" />

                <Input label="Numéro de carte" placeholder="**** **** **** 4587" />

                <Input label="Date expiration" placeholder="08 / 29" />

                <Input label="CVV" placeholder="***" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22C55E] py-5 text-lg font-black text-[#081C15] shadow-[0_0_35px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle2 size={22} />
                Confirmer le paiement
              </motion.button>
            </div>

            {/* SECURITY */}
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

          {/* RIGHT */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <img
              src="/images/cars/porsche.jpg"
              alt="car"
              className="h-60 w-full rounded-[2rem] object-cover"
            />

            <div className="mt-6">
              <h2 className="text-3xl font-black">
                Porsche 911 Carrera
              </h2>

              <p className="mt-2 text-white/45">
                Véhicule sportif premium.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <Info
                icon={<CalendarDays size={18} />}
                label="Date début"
                value="12 Juin 2026"
              />

              <Info
                icon={<CalendarDays size={18} />}
                label="Date fin"
                value="16 Juin 2026"
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
                  7 200 DH
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

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="mb-3 block text-sm text-white/45">
        {label}
      </label>

      <input
        type="text"
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