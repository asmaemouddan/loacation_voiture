import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import VehicleHero from "../components/vehicle/VehicleHero";
import VehicleSpecs from "../components/vehicle/VehicleSpecs";
import ReserveCTA from "../components/vehicle/ReserveCTA";

import { getVehicleById } from "../services/vehicleService";

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const data = await getVehicleById(id);

        const formattedCar = {
          ...data,
          id: data.id,
          marque: data.marque || "",
          modele: data.modele || "",
          name: data.name || `${data.marque || ""} ${data.modele || ""}`.trim(),
          immatriculation: data.immatriculation || data.matricule || "",
          carburant: data.carburant || "Essence",
          statutDisponibilite:
            data.statutDisponibilite ||
            (data.status === "disponible" ? "Disponible" : "Louée"),
          prixParJour: data.prixParJour || data.prix_jour || data.prix || 0,
          prixJour: data.prixJour || data.prix_jour || data.prix || 0,
          prix_jour: data.prix_jour || data.prixJour || data.prix || 0,
          image: data.image || "/images/cars/bmw-m4.jpg",
          categorie: data.categorie || data.category || "Voiture",
          category: data.category || data.categorie || "Voiture",
          description: data.description || "",
          transmission: data.transmission || "Automatique",
          places: data.places || 5,
          agence: data.agence || data.agence_nom || "",
          agence_id: data.agence_id || null,
        };

        setCar(formattedCar);
        setNotFound(false);
      } catch (error) {
        console.error("Erreur chargement véhicule:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const handleReserve = () => {
    navigate("/reservation", {
      state: {
        selectedCarId: car.id,
      },
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-4xl font-black text-[#22C55E]">
              Chargement du véhicule...
            </h1>
          </div>
        </section>
      </main>
    );
  }

  if (notFound || !car) {
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