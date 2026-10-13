import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void font-body text-cream antialiased">
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
