import { Link, useLocation } from "react-router-dom";
import { Car, CalendarCheck, LayoutDashboard, LogOut } from "lucide-react";

function AgencySidebar() {
  const location = useLocation();

  const menu = [
    {
      icon: <LayoutDashboard />,
      text: "Dashboard agence",
      path: "/agency-dashboard",
    },
    {
      icon: <Car />,
      text: "Véhicules agence",
      path: "/agency/vehicles",
    },
    {
      icon: <CalendarCheck />,
      text: "Réservations agence",
      path: "/agency/reservations",
    },
  ];

  return (
    <aside className="hidden border-r border-white/10 bg-[#0d1110] p-6 lg:flex lg:flex-col">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E6B4E] text-3xl font-black text-[#081C15]">
          A
        </div>

        <div>
          <h2 className="text-2xl font-black tracking-tight">Agence</h2>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#22C55E]">
            Responsable
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              to={item.path}
              key={item.text}
              className={`flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold transition ${
                isActive
                  ? "border border-[#22C55E]/30 bg-[#22C55E]/15 text-white"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-[#22C55E]"
              }`}
            >
              <span className="text-[#22C55E]">{item.icon}</span>
              {item.text}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 px-5 py-4 text-sm font-bold text-white/60 transition hover:border-[#22C55E]/20 hover:text-[#22C55E]">
          <LogOut size={18} />
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}

export default AgencySidebar;