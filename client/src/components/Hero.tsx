import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Indian Spices Market" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" /> 
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wider uppercase text-saffron-100">
            Exporting Tradition Worldwide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">
            Indian Masala <br /> Export Hub
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Bringing the authentic taste of Indian heritage to your kitchen. We export premium quality spices, pulses, rice, and millets globally.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-full transition-transform hover:scale-105"
            onClick={scrollToProducts}
          >
            View Products
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-lg h-14 px-8 border-white text-primary hover:bg-white hover:text-black rounded-full transition-all"
            onClick={scrollToContact}
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/70">
        <span className="text-sm tracking-widest uppercase">Scroll Down</span>
      </div>
    </section>
  );
}
