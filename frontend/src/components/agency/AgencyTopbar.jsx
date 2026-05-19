import { Bell, Search } from "lucide-react";

function AgencyTopbar() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-6">
      <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 md:flex">
        <Search size={18} className="text-white/35" />

        <input
          placeholder="Rechercher dans l’agence..."
          className="w-72 bg-transparent text-sm outline-none placeholder:text-white/35"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/65">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] text-xs font-black text-[#081C15]">
            3
          </span>
        </button>

        <div className="hidden md:block">
          <p className="font-black">Responsable Agence</p>
          <p className="text-sm text-white/45">Rento Fès Centre</p>
        </div>
      </div>
    </div>
  );
}

export default AgencyTopbar;