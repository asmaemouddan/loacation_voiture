import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Car,
  CalendarCheck,
  Users,
  FileText,
  CreditCard,
  Star,
  BarChart3,
  MessageSquare,
  Settings,
  ShieldCheck,
  LogOut,
  Building2,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { icon: <LayoutDashboard />, text: "Tableau de bord", path: "/admin" },
    { icon: <Car />, text: "Véhicules", path: "/admin/vehicles" },
    { icon: <CalendarCheck />, text: "Réservations", path: "/admin/reservations", badge: "23" },
    { icon: <Users />, text: "Clients", path: "/admin/users" },
    { icon: <Building2 />, text: "Agences", path: "/admin/agencies" },
    
  ];

  return (
    <aside className="hidden border-r border-white/10 bg-[#0d1110] p-6 lg:flex lg:flex-col">
      <div className="mb-10 flex items-center gap-3 ">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E6B4E] text-3xl font-black text-[#081C15]">
          R
        </div>

        <h2 className="text-3xl font-black tracking-tight">Rento</h2>
      </div>

      <nav className="space-y-2 overflow-y-auto pr-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              to={item.path}
              key={item.text}
              className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold transition ${
                isActive
                  ? "border border-[#22C55E]/30 bg-[#22C55E]/15 text-white"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-[#22C55E]"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-[#22C55E]">{item.icon}</span>
                {item.text}
              </span>

              {item.badge && (
                <span className="rounded-lg bg-[#22C55E] px-2 py-1 text-xs font-black text-[#081C15]">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4 pt-6">
        <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 px-5 py-4 text-sm font-bold text-white/60 transition hover:border-[#22C55E]/20 hover:text-[#22C55E]">
          <LogOut size={18} />
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;