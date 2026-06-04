import { useState } from "react";
import { UploadCloud, ScanLine, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../api/axios";

function ProfileScanOCR() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);
    setError("");
    setOcrResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const response = await api.post("/ocr/scan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const result = response.data?.data || response.data;

      setOcrResult(result);
      localStorage.setItem("ocr_result", JSON.stringify(result));
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      console.error("Erreur OCR:", err.response?.data || err);
      setError("Impossible de scanner le document. Vérifiez l'image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-[#081C15]/45 dark:text-white/45">
            Scanner CIN ou permis pour remplir automatiquement le profil.
          </p>

          <h2 className="mt-2 text-3xl font-black">
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
          {selectedFile ? selectedFile.name : "Importer document"}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 text-[#081C15]/45 dark:text-white/45">
          Glissez votre CIN ou permis de conduire ici pour extraire automatiquement
          les informations.
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-full bg-[#081C15] px-6 py-3 text-sm font-black text-white dark:bg-[#22C55E] dark:text-[#081C15]">
          <ScanLine size={18} />
          {loading ? "Scan en cours..." : "Scanner maintenant"}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {error && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-500/10 bg-red-500/10 px-5 py-4 text-sm font-bold text-red-500">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      {!ocrResult && !error && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#081C15]/10 bg-[#081C15]/5 px-5 py-4 text-sm font-bold text-[#081C15] dark:border-[#22C55E]/10 dark:bg-[#22C55E]/5 dark:text-[#22C55E]">
          <CheckCircle2 size={18} />
          Les informations extraites apparaîtront automatiquement ci-dessous.
        </div>
      )}

      {ocrResult && (
        <div className="mt-6 rounded-[2rem] border border-[#22C55E]/20 bg-[#22C55E]/10 p-6">
          <div className="mb-5 flex items-center gap-3 text-[#22C55E]">
            <CheckCircle2 size={22} />

            <h3 className="text-xl font-black">
              Résultat OCR
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ResultItem label="Type document" value={ocrResult.type_document} />
            <ResultItem label="Nom" value={ocrResult.nom} />
            <ResultItem label="Prénom" value={ocrResult.prenom} />
            <ResultItem label="CIN" value={ocrResult.cin} />
            <ResultItem label="Numéro permis" value={ocrResult.numero_permis} />
            <ResultItem label="Date naissance" value={ocrResult.date_naissance} />
            <ResultItem label="Lieu naissance" value={ocrResult.lieu_naissance} />
            <ResultItem label="Date expiration" value={ocrResult.date_expiration} />
          </div>
        </div>
      )}
    </div>
  );
}

function ResultItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/20">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#081C15]/40 dark:text-white/40">
        {label}
      </p>

      <p className="mt-2 font-black text-[#081C15] dark:text-white">
        {value || "—"}
      </p>
    </div>
  );
}

export default ProfileScanOCR;