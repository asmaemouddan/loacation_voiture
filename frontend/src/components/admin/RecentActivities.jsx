import {
  CheckCircle2,
} from "lucide-react";

import Panel from "./Panel";

function RecentActivities() {
  const acts = [
    [
      "Nouvelle réservation",
      "Porsche 911 par Laila Amrani",
      "Il y a 5 minutes",
    ],

    [
      "Document validé",
      "Permis de conduire - Yassine Alami",
      "Il y a 15 minutes",
    ],

    [
      "Paiement reçu",
      "850 DH de Sara Bennani",
      "Il y a 30 minutes",
    ],
  ];

  return (
    <Panel title="Activités récentes">
      <div className="mt-6 space-y-5">
        {acts.map(([title, text, time]) => (
          <div
            key={title}
            className="flex gap-4"
          >
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E]">
              <CheckCircle2 size={17} />
            </div>

            <div>
              <p className="font-black">
                {title}
              </p>

              <p className="text-sm text-white/45">
                {text}
              </p>

              <p className="mt-1 text-xs text-[#22C55E]/70">
                {time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default RecentActivities;