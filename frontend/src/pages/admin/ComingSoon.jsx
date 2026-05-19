import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";

function ComingSoon() {
  return (
    <AdminLayout>
      <div className="mt-16 flex min-h-[65vh] items-center justify-center">
        <div className="max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#22C55E]/20 bg-[#22C55E]/10 text-[#22C55E]">
            <Construction size={44} />
          </div>

          <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#22C55E]">
            Rentivo
          </p>

          <h1 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Module en cours
            <span className="block text-[#22C55E]">de préparation.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
            Cette fonctionnalité sera disponible dans une prochaine version de la plateforme.
          </p>

          <Link
            to="/admin"
            className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#22C55E] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#081C15]"
          >
            <ArrowLeft size={18} />
            Retour dashboard
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ComingSoon;