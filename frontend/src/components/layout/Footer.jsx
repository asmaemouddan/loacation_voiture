import { useContext } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { LanguageContext } from "../../context/LanguageContext";

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="relative overflow-hidden border-t border-[#2E6B4E]/10 bg-[#F7FAF8] px-6 py-16 text-[#081C15] transition-colors duration-500 dark:border-white/10 dark:bg-black dark:text-white">
      
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2E6B4E]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-[#2E6B4E]/10 pb-14 dark:border-white/10 md:grid-cols-2 lg:grid-cols-4">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E6B4E] shadow-[0_0_25px_rgba(46,107,78,0.25)]"
              >
                <span className="text-2xl font-black text-white">
                  R
                </span>
              </motion.div>

              <div>
                <h2 className="text-2xl font-black">
                  Rento
                </h2>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2E6B4E]">
                  Luxury Rental
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#081C15]/55 dark:text-white/55">
              {t.footer.description}
            </p>

            <div className="mt-7 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2E6B4E]/10 bg-[#2E6B4E]/5 text-[#2E6B4E] transition hover:border-[#2E6B4E] hover:bg-[#2E6B4E] hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-[#3C8A64] dark:hover:bg-[#2E6B4E]"
                >
                  <Icon size={15} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <FooterColumn
            title={t.footer.navigation}
            items={[
              t.footer.home,
              t.footer.vehicles,
              t.footer.reservation,
              t.footer.contact,
            ]}
          />

          <FooterColumn
            title={t.footer.services}
            items={[
              t.footer.service1,
              t.footer.service2,
              t.footer.service3,
              t.footer.service4,
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#2E6B4E]">
              {t.footer.contact}
            </h3>

            <div className="space-y-5 text-sm text-[#081C15]/55 dark:text-white/55">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-[#2E6B4E]" />
                Fès, Maroc
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#2E6B4E]" />
                +212 6 00 00 00 00
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="text-[#2E6B4E]" />
                contact@rento.ma
              </p>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="mt-7 rounded-[1.6rem] border border-[#2E6B4E]/15 text-[#22C55E]/5 p-5 backdrop-blur-xl dark:border-[#2E6B4E]/20 dark:bg-[#2E6B4E]/10"
            >
              <p className="text-sm font-black text-[#2E6B4E]">
                {t.footer.support}
              </p>

              <p className="mt-2 text-xs leading-6 text-[#081C15]/45 dark:text-white/45">
                {t.footer.supportText}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-5 pt-8 text-sm text-[#081C15]/40 dark:text-white/40 md:flex-row md:items-center md:justify-between"
        >
          <p>{t.footer.copy}</p>

          <div className="flex gap-6">
            {[t.footer.privacy, t.footer.terms, t.footer.security].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-[#2E6B4E]"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-[#2E6B4E]">
        {title}
      </h3>

      <ul className="space-y-4 text-sm text-[#081C15]/55 dark:text-white/55">
        {items.map((item) => (
          <motion.li key={item} whileHover={{ x: 4 }}>
            <a
              href="#"
              className="transition hover:text-[#2E6B4E]"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Footer;