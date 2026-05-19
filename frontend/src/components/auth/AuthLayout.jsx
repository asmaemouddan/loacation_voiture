import { motion } from "framer-motion";

function AuthLayout({ title, subtitle, image, children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081C15] text-white">
      <motion.img
        src={image}
        alt="Luxury car"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.68] contrast-125 saturate-110"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid w-full max-w-7xl lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex min-h-[720px] items-center">
            <div className="w-full max-w-md rounded-[2rem] border border-white/15 bg-black/35 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-10">
              <div className="mb-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E] text-3xl font-black bg-[#2E6B4E]">
                  R
                </div>

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-[#22C55E]">
                  Rentivo
                </p>

                <h1 className="text-4xl font-black tracking-tight text-white">
                  {title}
                </h1>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {subtitle}
                </p>
              </div>

              {children}
            </div>
          </div>

          <div className="hidden items-end justify-end pb-20 lg:flex">
            <div className="max-w-xl text-right">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.45em] text-[#22C55E]">
                Luxury car rental
              </p>

              <h2 className="text-6xl font-black leading-tight text-white">
                Drive the difference.
              </h2>

              <p className="ml-auto mt-6 max-w-md text-base leading-8 text-white/60">
                Une expérience premium pour réserver votre véhicule rapidement,
                simplement et en toute sécurité.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default AuthLayout;