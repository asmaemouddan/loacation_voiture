import Panel from "./Panel";

function PopularVehicles() {
  const cars = [
    [
      "Porsche 911 Carrera S",
      "18",
      "/images/cars/porsche.jpg",
    ],

    [
      "Range Rover Sport",
      "98",
      "/images/cars/amg.jpg",
    ],

    [
      "BMW M4 Competition",
      "18",
      "/images/cars/bmw-m4.jpg",
    ],
  ];

  return (
    <Panel title="Véhicules populaires">
      <div className="mt-6 space-y-4">
        {cars.map(([name, count, img]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-2xl bg-black/20 p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={img}
                alt={name}
                className="h-12 w-14 rounded-xl object-cover"
              />

              <p className="text-sm font-bold">
                {name}
              </p>
            </div>

            <span className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-[#22C55E]">
              {count}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default PopularVehicles;