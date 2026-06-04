import { useEffect, useState } from "react";
import { CreditCard, BadgeCheck, CalendarDays, Save } from "lucide-react";
import { getCurrentUser } from "../../services/authService";

function OCRVerification() {
  const [ocrData, setOcrData] = useState(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const loadOcrResult = () => {
      const savedResult = localStorage.getItem("ocr_result");
      const currentUser = getCurrentUser();

      if (savedResult) {
        setOcrData(JSON.parse(savedResult));
      }

      const isVerified =
        localStorage.getItem("ocr_verified") === "true" &&
        String(localStorage.getItem("ocr_verified_user_id")) ===
          String(currentUser?.id);

      setVerified(isVerified);
    };

    loadOcrResult();

    window.addEventListener("storage", loadOcrResult);

    return () => {
      window.removeEventListener("storage", loadOcrResult);
    };
  }, []);

  const handleConfirm = () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      alert("Veuillez vous connecter avant de confirmer les documents.");
      return;
    }

    if (!ocrData) {
      alert("Veuillez scanner un document avant de confirmer.");
      return;
    }

    localStorage.setItem("ocr_verified", "true");
    localStorage.setItem("ocr_verified_user_id", currentUser.id);
    window.dispatchEvent(new Event("storage"));

    setVerified(true);

    alert("Informations OCR confirmées avec succès.");
  };

  return (
    <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[#081C15]/45 dark:text-white/45">
            Vérifiez les informations extraites après le scan OCR.
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Vérification OCR
          </h2>
        </div>

        <div
          className={`rounded-2xl px-5 py-3 text-sm font-black ${
            verified
              ? "bg-[#22C55E]/10 text-[#22C55E]"
              : "bg-[#081C15]/10 text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]"
          }`}
        >
          {verified
            ? "Document confirmé"
            : ocrData
            ? "Document scanné"
            : "En attente du scan"}
        </div>
      </div>

      {!ocrData && (
        <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-6 text-sm font-bold text-yellow-700 dark:text-yellow-300">
          Aucun résultat OCR pour le moment. Importez une CIN ou un permis dans la section Scan OCR.
        </div>
      )}

      {ocrData && (
        <>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field
              icon={<BadgeCheck />}
              label="Type document"
              value={ocrData.type_document || "—"}
            />

            <Field
              icon={<BadgeCheck />}
              label="Nom"
              value={ocrData.nom || "—"}
            />

            <Field
              icon={<BadgeCheck />}
              label="Prénom"
              value={ocrData.prenom || "—"}
            />

            <Field
              icon={<CreditCard />}
              label="CIN"
              value={ocrData.cin || "—"}
            />

            <Field
              icon={<CreditCard />}
              label="N° Permis"
              value={ocrData.numero_permis || "—"}
            />

            <Field
              icon={<CalendarDays />}
              label="Date naissance"
              value={ocrData.date_naissance || "—"}
            />

            <Field
              icon={<BadgeCheck />}
              label="Lieu naissance"
              value={ocrData.lieu_naissance || "—"}
            />

            <Field
              icon={<CalendarDays />}
              label="Date expiration"
              value={ocrData.date_expiration || "—"}
            />
          </div>

          {ocrData.categories && (
            <div className="mt-5">
              <Field
                icon={<BadgeCheck />}
                label="Catégories permis"
                value={
                  Array.isArray(ocrData.categories)
                    ? ocrData.categories.join(", ")
                    : ocrData.categories
                }
              />
            </div>
          )}

          <button
            onClick={handleConfirm}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#081C15] py-4 font-black text-white dark:bg-[#22C55E] dark:text-[#081C15]"
          >
            <Save size={20} />
            {verified
              ? "Informations OCR déjà confirmées"
              : "Confirmer les informations OCR"}
          </button>
        </>
      )}
    </div>
  );
}

function Field({ icon, label, value }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#081C15]/50 dark:text-white/45">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-black/20">
        <span className="text-[#081C15] dark:text-[#22C55E]">
          {icon}
        </span>

        <input
          type="text"
          value={value}
          readOnly
          className="w-full bg-transparent text-sm font-bold text-[#081C15] outline-none dark:text-white"
        />
      </div>
    </div>
  );
}

export default OCRVerification;