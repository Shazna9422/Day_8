import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import DealOfDay from "./components/DealOfDay";
import NewArrivals from "./components/NewArrivals";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-900">
      <TopBar />
      <Navbar />

      <main className="mx-auto max-w-7xl px-4">
        <Hero />
        <Features />
        <Categories />
        <div className="py-8">
          <DealOfDay />
        </div>
        <NewArrivals />
        <Reveal>
          <Newsletter />
        </Reveal>
      </main>

      <Reveal y={20}>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;