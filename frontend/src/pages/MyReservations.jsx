import { useEffect, useState } from "react";
import {
  CalendarDays,
  Car,
  CreditCard,
  Eye,
  Wallet,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getReservations } from "../services/reservationService";
import { getVehicles } from "../services/vehicleService";
import { getCurrentUser } from "../services/authService";

function MyReservations() {
  const navigate = useNavigate();

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      navigate("/login");
      return;
    }

    const fetchReservations = async () => {
      try {
        const reservationsData = await getReservations();
        const vehiclesData = await getVehicles();

        const reservationItems = Array.isArray(reservationsData)
          ? reservationsData
          : reservationsData.data || [];

        const userReservations = reservationItems.filter(
          (reservation) => String(reservation.user_id) === String(currentUser.id)
        );

        const vehicleItems = Array.isArray(vehiclesData)
          ? vehiclesData
          : vehiclesData.data || [];

        const formattedReservations = userReservations.map((reservation) => {
          const vehicle =
            reservation.vehicule ||
            reservation.vehicle ||
            vehicleItems.find(
              (car) =>
                String(car.id) ===
                String(reservation.vehicule_id || reservation.vehicle_id)
            ) ||
            {};

          const carName =
            reservation.car ||
            reservation.vehicle_name ||
            `${vehicle.marque || ""} ${vehicle.modele || ""}`.trim() ||
            `Véhicule #${reservation.vehicule_id || reservation.vehicle_id || ""}`;

          return {
            id: reservation.id,
            car: carName,
            image:
              reservation.image ||
              vehicle.image ||
              "/images/cars/bmw-m4.jpg",
            dateDebut:
              reservation.dateDebut ||
              reservation.date_debut ||
              reservation.date_start ||
              "—",
            dateFin:
              reservation.dateFin ||
              reservation.date_fin ||
              reservation.date_end ||
              "—",
            total:
              reservation.total ||
              reservation.prix_total ||
              reservation.price_total ||
              0,
            status:
              reservation.status === "acceptee"
                ? "Confirmée"
                : reservation.status === "refusee"
                ? "Refusée"
                : reservation.status === "annulee"
                ? "Annulée"
                : reservation.status === "en_attente"
                ? "En attente"
                : reservation.status || "En attente",
            payment:
              reservation.payment ||
              reservation.payment_status ||
              reservation.statut_paiement ||
              "Non payé",
          };
        });

        setReservations(formattedReservations);
      } catch (error) {
        console.error("Erreur chargement réservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [navigate]);

  return (
    <main className="min-h-screen bg-white text-[#081C15] transition-colors duration-500 dark:bg-[#070b0a] dark:text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm text-[#081C15]/45 dark:text-white/45">
              Suivez l’état de vos demandes de réservation.
            </p>

            <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">
              Mes réservations
            </h1>
          </div>

          {loading && (
            <div className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-10 text-center text-sm font-bold text-[#2E6B4E] dark:border-white/10 dark:bg-white/[0.04]">
              Chargement des réservations...
            </div>
          )}

          {!loading && reservations.length === 0 && (
            <div className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-10 text-center text-sm font-bold text-[#2E6B4E] dark:border-white/10 dark:bg-white/[0.04]">
              Aucune réservation trouvée pour votre compte.
            </div>
          )}

          {!loading && reservations.length > 0 && (
            <div className="space-y-6">
              {reservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="grid gap-6 lg:grid-cols-[220px_1fr_auto] lg:items-center">
                    <img
                      src={reservation.image}
                      alt={reservation.car}
                      className="h-44 w-full rounded-[1.5rem] object-cover lg:h-36"
                    />

                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-2xl bg-[#081C15]/10 p-3 text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]">
                          <Car size={20} />
                        </div>

                        <div>
                          <h2 className="text-2xl font-black">
                            {reservation.car}
                          </h2>

                          <p className="text-sm text-[#081C15]/40 dark:text-white/40">
                            Réservation #{reservation.id}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3 md:grid-cols-3">
                        <Info
                          icon={<CalendarDays size={17} />}
                          label="Date début"
                          value={reservation.dateDebut}
                        />

                        <Info
                          icon={<CalendarDays size={17} />}
                          label="Date fin"
                          value={reservation.dateFin}
                        />

                        <Info
                          icon={<Wallet size={17} />}
                          label="Prix total"
                          value={`${reservation.total} DH`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-52">
                      <Badge status={reservation.status} />
                      <PaymentBadge status={reservation.payment} />

                      <Link
                        to={reservation.payment === "Non payé" ? "/payment" : "#"}
                        state={{ reservation }}
                        className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#081C15] px-5 py-4 font-black text-white transition hover:bg-[#0f2d23] dark:bg-[#22C55E] dark:text-[#081C15] dark:hover:bg-[#D8F3DC]"
                      >
                        {reservation.payment === "Non payé" ? (
                          <>
                            <CreditCard size={18} />
                            Payer
                          </>
                        ) : (
                          <>
                            <Eye size={18} />
                            Détails
                          </>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/20">
      <div className="mb-2 flex items-center gap-2 text-[#081C15] dark:text-[#22C55E]">
        {icon}

        <span className="text-xs font-black uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>

      <p className="font-bold text-[#081C15]/75 dark:text-white/75">
        {value}
      </p>
    </div>
  );
}

function Badge({ status }) {
  const style =
    status === "Confirmée"
      ? "bg-[#081C15]/10 text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]"
      : status === "Refusée" || status === "Annulée"
      ? "bg-red-500/10 text-red-500 dark:text-red-400"
      : "bg-yellow-400/10 text-yellow-700 dark:text-yellow-300";

  return (
    <span
      className={`rounded-xl px-4 py-3 text-center text-xs font-black ${style}`}
    >
      {status}
    </span>
  );
}

function PaymentBadge({ status }) {
  const style =
    status === "Payé"
      ? "bg-[#081C15]/10 text-[#081C15] dark:bg-[#22C55E]/10 dark:text-[#22C55E]"
      : "bg-red-500/10 text-red-500 dark:text-red-400";

  return (
    <span
      className={`rounded-xl px-4 py-3 text-center text-xs font-black ${style}`}
    >
      Paiement: {status}
    </span>
  );
}

export default MyReservations;