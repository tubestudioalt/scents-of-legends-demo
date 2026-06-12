import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import PackagingSection from "@/components/PackagingSection";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="page-fade">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <PackagingSection />
        <Collection />
        <About />
        <Testimonials />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
