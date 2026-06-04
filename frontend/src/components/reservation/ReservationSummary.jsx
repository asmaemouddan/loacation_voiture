import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, CreditCard, Clock, Wallet } from "lucide-react";
import { createReservation } from "../../services/reservationService";
import { getCurrentUser } from "../../services/authService";

function ReservationSummary({ selectedVehicle, agence, dateDebut, dateFin }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const vehicleName =
    selectedVehicle?.name ||
    `${selectedVehicle?.marque || ""} ${selectedVehicle?.modele || ""}`.trim();

  const pricePerDay =
    selectedVehicle?.price ||
    selectedVehicle?.prix ||
    selectedVehicle?.prixParJour ||
    selectedVehicle?.prixJour ||
    selectedVehicle?.prix_jour ||
    0;

  const duration = useMemo(() => {
    if (!dateDebut || !dateFin) {
      return 1;
    }

    const start = new Date(dateDebut);
    const end = new Date(dateFin);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days > 0 ? days : 1;
  }, [dateDebut, dateFin]);

  const total = pricePerDay * duration;

  const handleConfirm = async () => {
    if (!selectedVehicle || !dateDebut || !dateFin) {
      return;
    }

    const currentUser = getCurrentUser();

    if (!currentUser) {
      alert("Veuillez vous connecter avant de réserver.");
      navigate("/login");
      return;
    }

    try {
      setSubmitting(true);

      await createReservation({
        user_id: currentUser.id,
        vehicule_id: selectedVehicle.id,
        date_debut: dateDebut,
        date_fin: dateFin,
        prix_total: total,
        status: "en_attente",
      });

      navigate("/my-reservations");
    } catch (error) {
      console.error("Erreur création réservation:", error.response?.data || error);
      alert("Impossible de créer la réservation.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 rounded-[26px] border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-black/35">
      <h3 className="font-black text-[#081C15] dark:text-white">
        Récapitulatif
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#081C15]/50 dark:text-white/45">
        Votre demande sera envoyée à l’administrateur pour validation.
      </p>

      <div className="mt-5 space-y-3">
        <Row label="Véhicule" value={vehicleName || "—"} />
        <Row label="Agence" value={agence || "—"} />
        <Row label="Prix / jour" value={`${pricePerDay} DH`} />
        <Row label="Durée" value={`${duration} jour${duration > 1 ? "s" : ""}`} />
        <Row label="Statut réservation" value="En attente" icon={<Clock />} />
        <Row label="Paiement" value="Non payé" icon={<CreditCard />} />
      </div>

      <div className="mt-5 rounded-2xl border border-[#081C15]/20 bg-[#081C15]/10 p-5 dark:border-[#22C55E]/20 dark:bg-[#22C55E]/10">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[#081C15]/60 dark:text-white/55">
            <Wallet size={18} />
            Prix total
          </span>

          <span className="text-3xl font-black text-[#081C15] dark:text-[#22C55E]">
            {total} DH
          </span>
        </div>
      </div>

      <button
        onClick={handleConfirm}
        disabled={!selectedVehicle || !dateDebut || !dateFin || submitting}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#081C15] py-4 font-black text-white shadow-[0_0_30px_rgba(8,28,21,0.25)] transition hover:bg-[#0f2d23] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#22C55E] dark:text-[#081C15] dark:shadow-[0_0_30px_rgba(34,197,94,0.35)] dark:hover:bg-[#D8F3DC]"
      >
        <CheckCircle2 size={20} />
        {submitting ? "Envoi en cours..." : "Confirmer la réservation"}
      </button>
    </div>
  );
}

function Row({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/[0.03]">
      <span className="flex items-center gap-2 text-[#081C15]/50 dark:text-white/45">
        {icon}
        {label}
      </span>

      <span className="font-black text-[#081C15] dark:text-white">
        {value}
      </span>
    </div>
  );
}

export default ReservationSummary;