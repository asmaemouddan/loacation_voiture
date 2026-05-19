import { motion } from "framer-motion";
import { CalendarDays, CarFront, Building2 } from "lucide-react";
import ReservationSummary from "./ReservationSummary";

function ReservationForm({
  cars,
  selectedCar,
  setSelectedCar,
}) {
  const selectedVehicle = cars.find(
    (car) => String(car.id) === String(selectedCar)
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-[32px] border border-black/10 bg-black/[0.03] p-6 backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.035]"
    >
      <h2 className="mb-2 text-2xl font-black text-[#081C15] dark:text-white">
        Détails de réservation
      </h2>

      <p className="mb-6 text-sm text-[#081C15]/45 dark:text-white/45">
        Complétez les informations liées à votre réservation.
      </p>

      <div>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#081C15] dark:text-[#22C55E]">
          Informations réservation
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081C15]/60 dark:text-white/60">
              Véhicule
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-black/35">
              <CarFront
                size={18}
                className="text-[#081C15] dark:text-[#22C55E]"
              />

              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full bg-transparent text-sm text-[#081C15] outline-none dark:text-white"
              >
                {cars.map((car) => (
                  <option
                    key={car.id}
                    value={car.id}
                    className="bg-white dark:bg-black"
                  >
                    {car.name} - {car.price} DH/jour
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Input
            label="Nom agence"
            icon={<Building2 size={18} />}
            placeholder="Agence Fès Centre"
          />

          <Input
            label="Date début"
            type="date"
            icon={<CalendarDays />}
          />

          <Input
            label="Date fin"
            type="date"
            icon={<CalendarDays />}
          />
        </div>
      </div>

      <ReservationSummary selectedVehicle={selectedVehicle} />
    </motion.div>
  );
}

function Input({ label, icon, value, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#081C15]/60 dark:text-white/60">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4 focus-within:border-[#081C15]/50 dark:border-white/10 dark:bg-black/35 dark:focus-within:border-[#22C55E]/50">
        {icon && (
          <span className="text-[#081C15] dark:text-[#22C55E]">
            {icon}
          </span>
        )}

        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder || label}
          className="w-full bg-transparent text-sm text-[#081C15] outline-none placeholder:text-[#081C15]/30 dark:text-white dark:placeholder:text-white/30"
        />
      </div>
    </div>
  );
}

export default ReservationForm;