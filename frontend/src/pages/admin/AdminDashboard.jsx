import { useEffect, useState } from "react";
import {
  Car,
  Users,
  CalendarCheck,
  Wallet,
  Building2,
  UserCog,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";
import StatCard from "../../components/admin/StatCard";
import { getVehicles } from "../../services/vehicleService";
import { getReservations } from "../../services/reservationService";
import api from "../../api/axios";

function AdminDashboard() {
  const [stats, setStats] = useState({
    vehicles: 0,
    clients: 0,
    reservations: 0,
    revenues: 0,
    agencies: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [vehiclesData, reservationsData, agenciesData] =
          await Promise.all([
            getVehicles(),
            getReservations(),
            api.get("/agences"),
          ]);

        const vehicles = Array.isArray(vehiclesData)
          ? vehiclesData
          : vehiclesData.data || [];

        const reservations = Array.isArray(reservationsData)
          ? reservationsData
          : reservationsData.data || [];

        const agenciesResponse = agenciesData.data;
        const agencies = Array.isArray(agenciesResponse)
          ? agenciesResponse
          : agenciesResponse.data || [];

        let clients = 0;

        try {
          const clientsResponse = await api.get("/clients");
          const clientsData = clientsResponse.data;
          const clientsItems = Array.isArray(clientsData)
            ? clientsData
            : clientsData.data || [];

          clients = clientsItems.length;
        } catch (error) {
          clients = 0;
        }

        const revenues = reservations.reduce((total, reservation) => {
          const value =
            Number(reservation.prix_total) ||
            Number(reservation.total) ||
            Number(reservation.price_total) ||
            0;

          return total + value;
        }, 0);

        setStats({
          vehicles: vehicles.length,
          clients,
          reservations: reservations.length,
          revenues,
          agencies: agencies.length,
        });
      } catch (error) {
        console.error("Erreur chargement statistiques dashboard:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm text-white/45">
            Bienvenue, voici ce qui se passe aujourd’hui sur votre plateforme.
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Tableau de bord
          </h1>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/70">
          Dashboard administrateur
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<Car />}
          label="Véhicules"
          value={stats.vehicles}
          growth="+12%"
        />

        <StatCard
          icon={<Users />}
          label="Clients"
          value={stats.clients}
          growth="+18%"
        />

        <StatCard
          icon={<CalendarCheck />}
          label="Réservations"
          value={stats.reservations}
          growth="+8%"
        />

        <StatCard
          icon={<Wallet />}
          label="Revenus"
          value={`${stats.revenues} DH`}
          growth="+22%"
        />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<Building2 />}
          label="Agences"
          value={stats.agencies}
          growth="+5%"
        />
      </div>

      <div className="mt-8">
        <div className="mb-5">
          <h2 className="text-2xl font-black tracking-[-0.03em]">
            Actions rapides
          </h2>

          <p className="mt-2 text-sm text-white/45">
            Accédez rapidement aux principales fonctionnalités de gestion de la plateforme.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <QuickAction
            to="/admin/vehicles"
            icon={<Car size={22} />}
            title="Gérer les véhicules"
            description="Ajouter, modifier, supprimer et vérifier la disponibilité des véhicules."
          />

          <QuickAction
            to="/admin/agencies"
            icon={<Building2 size={22} />}
            title="Gérer les agences"
            description="Administrer les agences, leurs informations et leurs responsables."
          />

          <QuickAction
            to="/admin/users"
            icon={<Users size={22} />}
            title="Gérer les clients"
            description="Consulter les comptes clients et suivre leurs réservations."
          />

          <QuickAction
            to="/admin/users"
            icon={<UserCog size={22} />}
            title="Gérer les responsables"
            description="Affecter les responsables d’agence et gérer leurs accès."
          />

          <QuickAction
            to="/admin/reservations"
            icon={<CalendarCheck size={22} />}
            title="Réservations"
            description="Suivre, valider ou refuser les demandes de réservation."
          />

          <QuickAction
            to="/admin/reservations"
            icon={<CreditCard size={22} />}
            title="Paiements"
            description="Consulter les paiements liés aux réservations et leurs statuts."
          />
        </div>
      </div>
    </AdminLayout>
  );
}

function QuickAction({ to, icon, title, description }) {
  return (
    <Link
      to={to}
      className="group block rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E]">
          {icon}
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/50 transition group-hover:bg-[#22C55E]/10 group-hover:text-[#22C55E]">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <h3 className="text-lg font-black text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/50">
        {description}
      </p>
    </Link>
  );
}

export default AdminDashboard;