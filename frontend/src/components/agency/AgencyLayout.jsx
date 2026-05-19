import AgencySidebar from "./AgencySidebar";
import AgencyTopbar from "./AgencyTopbar";

function AgencyLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#070b0a] text-white">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <AgencySidebar />

        <section className="relative overflow-hidden px-6 py-6 lg:px-8">
          <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#22C55E]/10 blur-[150px]" />

          <div className="relative">
            <AgencyTopbar />
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AgencyLayout;