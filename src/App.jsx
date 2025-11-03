import Header from "./components/Header";
import Hero from "./components/Hero";
import Mockup from "./components/Mockup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Mockup />
      </main>
      <Footer />
    </div>
  );
}
