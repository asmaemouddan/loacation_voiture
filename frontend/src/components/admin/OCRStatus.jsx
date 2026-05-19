import Panel from "./Panel";
import DocRow from "./DocRow";

function OCRStatus() {
  return (
    <Panel title="Statut des documents OCR">
      <div className="mt-6 grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
        <div className="relative mx-auto h-44 w-44 rounded-full bg-conic">
          <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-[#111514]">
            <p className="text-3xl font-black">
              248
            </p>

            <p className="text-sm text-white/45">
              Total
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <DocRow
            label="Validés"
            value="168 (68%)"
            color="bg-[#22C55E]"
          />

          <DocRow
            label="En attente"
            value="52 (21%)"
            color="bg-yellow-400"
          />

          <DocRow
            label="Refusés"
            value="28 (11%)"
            color="bg-red-500"
          />
        </div>
      </div>
    </Panel>
  );
}

export default OCRStatus;