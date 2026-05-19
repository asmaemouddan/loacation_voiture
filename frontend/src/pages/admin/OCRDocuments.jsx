import {
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  ScanLine,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

function OCRDocuments() {
  const requests = [
    {
      id: 1,
      client: "Laila Amrani",
      documentType: "CIN",
      extractedName: "Laila Amrani",
      extractedCin: "AB123456",
      extractedLicense: "—",
      scanDate: "12 Juin 2026",
      confidence: "98%",
      status: "En attente",
    },
    {
      id: 2,
      client: "Yassine Alami",
      documentType: "Permis",
      extractedName: "Yassine Alami",
      extractedCin: "—",
      extractedLicense: "P12345678",
      scanDate: "14 Juin 2026",
      confidence: "95%",
      status: "Vérifié",
    },
    {
      id: 3,
      client: "Sara Bennani",
      documentType: "CIN",
      extractedName: "Sara Bennani",
      extractedCin: "CD789654",
      extractedLicense: "—",
      scanDate: "18 Juin 2026",
      confidence: "81%",
      status: "Refusé",
    },
  ];

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-white/45">
            Vérifiez les informations extraites automatiquement par le service OCR.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Vérification OCR
          </h1>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Stat title="Scans OCR" value="248" />
        <Stat title="Documents vérifiés" value="168" />
        <Stat title="En attente" value="52" />
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
            <Search size={18} className="text-white/35" />

            <input
              type="text"
              placeholder="Rechercher par client, CIN ou permis..."
              className="bg-transparent text-sm outline-none placeholder:text-white/35"
            />
          </div>

          <div className="flex gap-3">
            <button className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-bold text-white/65">
              Tous
            </button>

            <button className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-sm font-bold text-yellow-300">
              En attente
            </button>

            <button className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 px-5 py-3 text-sm font-bold text-[#22C55E]">
              Vérifiés
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[1050px] border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-sm text-white/40">
                <th className="pb-3">Client</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Nom extrait</th>
                <th className="pb-3">CIN</th>
                <th className="pb-3">Permis</th>
                <th className="pb-3">Confiance</th>
                <th className="pb-3">Statut</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((item) => (
                <tr key={item.id} className="bg-black/20">
                  <td className="rounded-l-2xl px-4 py-5">
                    <p className="font-black">{item.client}</p>
                    <p className="text-sm text-white/45">{item.scanDate}</p>
                  </td>

                  <td className="px-4 py-5">
                    <span className="rounded-xl bg-[#22C55E]/10 px-4 py-2 text-xs font-black text-[#22C55E]">
                      {item.documentType}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-white/70">
                    {item.extractedName}
                  </td>

                  <td className="px-4 py-5 font-bold text-white/65">
                    {item.extractedCin}
                  </td>

                  <td className="px-4 py-5 font-bold text-white/65">
                    {item.extractedLicense}
                  </td>

                  <td className="px-4 py-5">
                    <span className="font-black text-[#22C55E]">
                      {item.confidence}
                    </span>
                  </td>

                  <td className="px-4 py-5">
                    <Status status={item.status} />
                  </td>

                  <td className="rounded-r-2xl px-4 py-5">
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-3 text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#081C15]">
                        <CheckCircle2 size={18} />
                      </button>

                      <button className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white">
                        <XCircle size={18} />
                      </button>

                      <button className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:text-[#22C55E]">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
        <ScanLine />
      </div>

      <p className="text-sm text-white/45">{title}</p>
      <p className="mt-2 text-4xl font-black text-[#22C55E]">{value}</p>
    </div>
  );
}

function Status({ status }) {
  const styles = {
    Vérifié: "bg-[#22C55E]/10 text-[#22C55E]",
    "En attente": "bg-yellow-400/10 text-yellow-300",
    Refusé: "bg-red-500/10 text-red-400",
  };

  return (
    <span className={`rounded-xl px-4 py-2 text-xs font-black ${styles[status]}`}>
      {status}
    </span>
  );
}

export default OCRDocuments;