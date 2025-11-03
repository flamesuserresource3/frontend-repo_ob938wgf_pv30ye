import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
      </main>
      <Footer />
    </div>
  );
}
