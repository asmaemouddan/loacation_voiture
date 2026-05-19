import { CreditCard, BadgeCheck, CalendarDays, Save } from "lucide-react";

function OCRVerification() {
  return (
    <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[#081C15]/45 dark:text-white/45">
            Vérifiez les informations extraites après le scan OCR.
          </p>

          <h2 className="mt-2 text-3xl font-black">Vérification OCR</h2>
        </div>

        <div className="rounded-2xl bg-[#081C15]/10 px-5 py-3 text-sm font-black text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]">
          En vérification
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field icon={<CreditCard />} label="CIN" value="AB123456" />
        <Field icon={<BadgeCheck />} label="N° Permis" value="P987654" />
        <Field icon={<CalendarDays />} label="Date naissance" value="15/05/1998" />
        <Field icon={<BadgeCheck />} label="Catégorie permis" value="B" />
      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#081C15] py-4 font-black text-white dark:bg-[#22C55E] dark:text-[#081C15]">
        <Save size={20} />
        Confirmer les informations OCR
      </button>
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
        <span className="text-[#081C15] dark:text-[#22C55E]">{icon}</span>

        <input
          type="text"
          defaultValue={value}
          className="w-full bg-transparent text-sm font-bold text-[#081C15] outline-none dark:text-white"
        />
      </div>
    </div>
  );
}

export default OCRVerification;