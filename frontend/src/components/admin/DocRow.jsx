function DocRow({
  label,
  value,
  color,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-black/20 p-4">
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${color}`}
        />

        <span className="text-sm text-white/65">
          {label}
        </span>
      </div>

      <span className="font-black">
        {value}
      </span>
    </div>
  );
}

export default DocRow;