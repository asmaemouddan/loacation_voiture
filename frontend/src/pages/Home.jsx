import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ReservationSteps from "../components/home/ReservationSteps";
import FeaturedCars from "../components/home/FeaturedCars";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-[#020403] dark:text-white">
      <Navbar />
      <Hero />
      <ReservationSteps />
      <FeaturedCars />
      <Footer />
    </main>
  );
}

export default Home;