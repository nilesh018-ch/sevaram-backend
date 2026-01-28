import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ShopByCategory from "@/components/ShopByCategory";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useStore } from "@/context/StoreContext";

export default function Home() {
  // Using store to trigger re-renders when data changes, 
  // though components like ShopByCategory will consume it directly
  useStore(); 

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <ShopByCategory />
        <About />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
