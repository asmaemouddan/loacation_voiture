import { UploadCloud, ScanLine, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function ProfileScanOCR() {
  return (
    <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[#081C15]/45 dark:text-white/45">
            Scanner CIN ou permis pour remplir automatiquement le profil.
          </p>

          <h2 className="mt-2 text-3xl font-black ">
            Scan OCR
          </h2>
        </div>

        <div className="rounded-2xl bg-[#081C15]/10 px-5 py-3 text-sm font-black text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]">
          OCR Intelligent
        </div>
      </div>

      <label className="mt-8 flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#081C15]/20 bg-white p-8 text-center transition hover:border-[#081C15]/40 dark:border-[#22C55E]/20 dark:bg-black/20 dark:hover:border-[#22C55E]/40">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#081C15]/10 text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]"
        >
          <UploadCloud size={36} />
        </motion.div>

        <h3 className="mt-6 text-2xl font-black">
          Importer document
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 text-[#081C15]/45 dark:text-white/45">
          Glissez votre CIN ou permis de conduire ici
          pour extraire automatiquement les informations.
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-full bg-[#081C15] px-6 py-3 text-sm font-black text-white dark:bg-[#22C55E] dark:text-[#081C15]">
          <ScanLine size={18} />
          Scanner maintenant
        </div>

        <input type="file" className="hidden" />
      </label>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#081C15]/10 bg-[#081C15]/5 px-5 py-4 text-sm font-bold text-[#081C15] dark:border-[#22C55E]/10 dark:bg-[#22C55E]/5 dark:text-[#22C55E]">
        <CheckCircle2 size={18} />
        Les informations extraites apparaîtront automatiquement ci-dessous.
      </div>
    </div>
  );
}

export default ProfileScanOCR;