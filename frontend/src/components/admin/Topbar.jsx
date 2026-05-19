import {
  Search,
  Bell,
  Sun,
} from "lucide-react";

import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-black/10 pb-6 dark:border-white/10">
      <div className="hidden items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-3 dark:border-white/10 dark:bg-white/[0.04] md:flex">
        <Search
          size={18}
          className="text-[#081C15]/35 dark:text-white/35"
        />

        <input
          placeholder="Rechercher quelque chose..."
          className="w-72 bg-transparent text-sm text-[#081C15] outline-none placeholder:text-[#081C15]/35 dark:text-white dark:placeholder:text-white/35"
        />

        <span className="rounded-lg bg-black/5 px-2 py-1 text-xs text-[#081C15]/45 dark:bg-white/10 dark:text-white/45">
          ⌘K
        </span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="rounded-full border border-black/10 bg-black/[0.03] p-3 text-[#081C15]/65 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65">
          <Sun size={18} />
        </button>

        <button className="relative rounded-full border border-black/10 bg-black/[0.03] p-3 text-[#081C15]/65 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65">
          <Bell size={18} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] text-xs font-black text-[#081C15]">
            8
          </span>
        </button>

        <Link
          to="/admin/profile"
          className="flex items-center gap-3 rounded-2xl border border-transparent p-1 transition hover:border-[#22C55E]/30"
        >
          <img
            src="/images/admin/admin.jpg"
            alt="Admin"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="hidden md:block">
            <p className="font-black text-[#081C15] dark:text-white">
              Admin
            </p>

            <p className="text-sm text-[#081C15]/45 dark:text-white/45">
              Administrateur
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;