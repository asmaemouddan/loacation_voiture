import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cars } from "../data/cars";

import ReservationForm from "../components/reservation/ReservationForm";

function Reservation() {
  const location = useLocation();

  const [selectedCar, setSelectedCar] = useState(
    location.state?.selectedCarId || cars[0]?.id
  );

  return (
    <main className="min-h-screen bg-white text-[#081C15] transition-colors duration-500 dark:bg-[#020403] dark:text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(8,28,21,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.13),transparent_35%)]" />

        <div className="absolute right-[-10%] top-32 h-[520px] w-[520px] rounded-full bg-[#081C15]/10 blur-[150px] dark:bg-[#22C55E]/10" />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#081C15]/80 dark:text-[#22C55E]/80">
              Réservation
            </p>

            <h1 className="max-w-4xl text-5xl  font-black tracking-tight md:text-7xl">
              Confirmer votre
              <span className="block text-[#2E6B4E] text-[#2E6B4E]">
                réservation.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[#081C15]/55 dark:text-white/50">
             Configurez votre réservation en quelques étapes :
            </p>
          </motion.div>

          <ReservationForm
            cars={cars}
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Reservation;