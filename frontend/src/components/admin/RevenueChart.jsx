import Panel from "./Panel";

function RevenueChart() {
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  return (
    <Panel
      title="Aperçu des revenus"
      action="Mensuel"
    >
      <div className="mt-6 h-72 rounded-2xl bg-black/20 p-5">
        <svg
          viewBox="0 0 700 260"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id="greenFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#22C55E"
                stopOpacity="0.45"
              />

              <stop
                offset="100%"
                stopColor="#22C55E"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M20 210 C90 160, 110 120, 160 145 C210 170, 220 70, 285 95 C335 120, 330 40, 390 70 C450 105, 470 150, 530 115 C585 80, 610 55, 680 45 L680 240 L20 240 Z"
            fill="url(#greenFill)"
          />

          <path
            d="M20 210 C90 160, 110 120, 160 145 C210 170, 220 70, 285 95 C335 120, 330 40, 390 70 C450 105, 470 150, 530 115 C585 80, 610 55, 680 45"
            fill="none"
            stroke="#22C55E"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2 text-xs text-white/35 md:grid-cols-12">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </Panel>
  );
}

export default RevenueChart;