import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import VehicleHero from "../components/vehicle/VehicleHero";
import VehicleSpecs from "../components/vehicle/VehicleSpecs";
import ReserveCTA from "../components/vehicle/ReserveCTA";

import { cars } from "../data/cars";

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = useMemo(() => {
    return cars.find((item) => String(item.id) === String(id));
  }, [id]);

  const isConnected = false;

  const handleReserve = () => {
  navigate("/reservation", {
    state: {
      selectedCarId: car.id,
    },
  });
};

  if (!car) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-5xl font-black">Véhicule introuvable</h1>

            <button
              onClick={() => navigate("/vehicles")}
              className="mt-8 rounded-full bg-[#22C55E] px-8 py-4 font-black text-[#081C15]"
            >
              Retour aux véhicules
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <VehicleHero car={car} />

      <VehicleSpecs car={car} />

      <ReserveCTA onReserve={handleReserve} />

      <Footer />
    </main>
  );
}

export default VehicleDetails;