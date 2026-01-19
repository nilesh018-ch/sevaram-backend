import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-[#0a192f]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              India's Largest B2B Marketplace
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Sevaram Eximco <span className="text-secondary">& Services</span>
            </h1>
            <p className="text-xl text-white/70 max-w-xl">
              Sourcing Made Easy. Connect with verified Indian suppliers. We handle everything from documentation to global logistics.
            </p>
            
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search for products (e.g. Spices, Textiles)" 
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-white border-none text-foreground focus:ring-2 focus:ring-secondary"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-white">
                Search
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5k+</div>
                <div className="text-sm text-white/50">Verified Suppliers</div>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://busyexim.com/wp-content/uploads/2025/02/Indias-Largest-B2B-Marketplace-4.png" 
                  alt="Marketplace Preview" 
                  className="w-full h-auto"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Direct Source</div>
                  <div className="text-xs text-muted-foreground">From Indian Farms</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
