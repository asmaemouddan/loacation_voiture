import {
  MoreVertical,
} from "lucide-react";

import Panel from "./Panel";
import Status from "./Status";

function RecentReservations() {
  const rows = [
    [
      "Porsche 911 Carrera S",
      "Laila Amrani",
      "12 Juin, 2024",
      "En attente",
      "/images/cars/porsche.jpg",
    ],

    [
      "Range Rover Sport",
      "Yassine Alami",
      "11 Juin, 2024",
      "Confirmée",
      "/images/cars/amg.jpg",
    ],

    [
      "BMW M4 Competition",
      "Sara Bennani",
      "10 Juin, 2024",
      "Confirmée",
      "/images/cars/bmw-m4.jpg",
    ],

    [
      "Audi RS7",
      "Omar El Idrissi",
      "09 Juin, 2024",
      "Annulée",
      "/images/cars/porsche.jpg",
    ],
  ];

  return (
    <Panel
      title="Réservations récentes"
      action="Voir toutes"
    >
      <div className="mt-6 space-y-4">
        {rows.map(
          ([car, client, date, status, image]) => (
            <div
              key={car}
              className="grid grid-cols-[72px_1fr_auto_auto] items-center gap-4 rounded-2xl bg-black/20 p-3"
            >
              <img
                src={image}
                alt={car}
                className="h-14 w-20 rounded-xl object-cover"
              />

              <div>
                <p className="font-black">
                  {car}
                </p>

                <p className="text-sm text-white/45">
                  {client}
                </p>
              </div>

              <p className="hidden text-sm text-white/45 md:block">
                {date}
              </p>

              <div className="flex items-center gap-3">
                <Status status={status} />

                <MoreVertical
                  size={18}
                  className="text-white/35"
                />
              </div>
            </div>
          )
        )}
      </div>
    </Panel>
  );
}

export default RecentReservations;