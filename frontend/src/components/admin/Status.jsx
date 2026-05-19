function Status({ status }) {
  const colors = {
    Confirmée:
      "bg-[#22C55E]/10 text-[#22C55E]",

    "En attente":
      "bg-yellow-400/10 text-yellow-300",

    Annulée:
      "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`rounded-xl px-4 py-2 text-xs font-black ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default Status;