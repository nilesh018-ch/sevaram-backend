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

export default function Home() {
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
