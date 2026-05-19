import { Menu, Moon, Sun, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const links = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.vehicles, path: "/vehicles" },
    { name: t.nav.myReservations, path: "/my-reservations" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="fixed left-0 top-0 z-50 w-full px-3 pt-4"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-[#2E6B4E]/15 bg-[#F7FAF8]/85 px-4 py-3 shadow-[0_20px_70px_rgba(46,107,78,0.12)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-black/35">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E6B4E] text-lg font-black text-white shadow-[0_0_22px_rgba(46,107,78,0.25)] dark:bg-[#2E6B4E]"
          >
            R
          </motion.div>

          <div>
            <h1 className="text-lg font-black tracking-tight text-[#081C15] dark:text-white">
              Rento
            </h1>

            <p className="-mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#2E6B4E]">
              Luxury Rental
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <Link
                to={link.path}
                className="rounded-full px-3 py-2 text-[13px] font-bold text-[#081C15]/60 transition hover:bg-[#2E6B4E]/10 hover:text-[#2E6B4E] dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-[#3C8A64]"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-[#2E6B4E]/15 bg-[#2E6B4E]/5 px-2.5 py-2 dark:border-white/10 dark:bg-white/10">
            <Languages size={16} className="text-[#2E6B4E] dark:text-[#3C8A64]" />

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-xs font-black text-[#081C15] outline-none dark:text-white"
            >
              <option value="fr" className="text-black">FR</option>
              <option value="en" className="text-black">EN</option>
              <option value="ar" className="text-black">AR</option>
            </select>
          </div>

          <motion.button
            whileHover={{ rotate: 15, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E6B4E]/15 bg-[#2E6B4E]/5 text-[#081C15] transition hover:bg-[#2E6B4E] hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-[#3C8A64]"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </motion.button>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/profile"
              className="flex items-center gap-3 rounded-full border border-[#2E6B4E]/15 bg-[#2E6B4E]/5 px-3 py-2 transition hover:border-[#2E6B4E]/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-[#3C8A64]/40"
            >
              <img
               src="/images/profile/admin.jpg"
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="hidden text-left lg:block">
                <p className="text-xs font-black text-[#081C15] dark:text-white">
                  Asmae
                </p>

                <p className="text-[10px] text-[#081C15]/45 dark:text-white/45">
                  Mon profil
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E6B4E]/15 bg-[#2E6B4E]/5 text-[#2E6B4E] lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-[#3C8A64]">
          <Menu />
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;