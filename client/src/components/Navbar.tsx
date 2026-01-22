import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Menu, Search, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();
  const logoUrl = "https://sevarameximserve.com/wp-content/uploads/2025/10/cropped-3D-1.jpg";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={cn(
        "bg-[#0a192f] text-white/70 py-2 border-b border-white/5 transition-all",
        isScrolled ? "hidden" : "block"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white cursor-pointer"><Phone className="w-3 h-3 text-secondary" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5 hover:text-white cursor-pointer"><Mail className="w-3 h-3 text-secondary" /> info@sevarameximserve.com</span>
          </div>
          <div className="flex items-center gap-6">
            <Facebook className="w-3 h-3 hover:text-white cursor-pointer" />
            <Instagram className="w-3 h-3 hover:text-white cursor-pointer" />
            <Twitter className="w-3 h-3 hover:text-white cursor-pointer" />
            <Linkedin className="w-3 h-3 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "transition-all duration-300 border-b",
        isScrolled ? "bg-white py-2 shadow-lg border-border" : "bg-transparent py-4 border-white/10"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setLocation("/")}>
              <img src={logoUrl} alt="Sevaram Exim" className="h-14 w-auto object-contain rounded" />
              <div className="flex flex-col items-center">
                <span className={cn("text-3xl font-black leading-none tracking-tighter", isScrolled ? "text-[#00aeef]" : "text-[#00aeef]")}>SEVARAM</span>
                <div className="flex items-center w-full mt-1">
                  <div className="h-[2px] flex-1 bg-[#555]"></div>
                  <span className={cn("text-[10px] font-bold leading-none px-2 whitespace-nowrap", isScrolled ? "text-[#555]" : "text-[#555]")}>EXIMCO AND SERVICES</span>
                  <div className="h-[2px] flex-1 bg-[#555]"></div>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              <a href="#" onClick={(e) => { e.preventDefault(); setLocation("/"); }} className="hover:text-secondary transition-colors">Home</a>
              <a href="/#about" className="hover:text-secondary transition-colors">About</a>
              <a href="/#services" className="hover:text-secondary transition-colors">Services</a>
              <a href="/#products" className="hover:text-secondary transition-colors">Marketplace</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white")}>
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-6 flex items-center gap-2"
              onClick={() => setLocation("/inquiry")}
              data-testid="button-inquiry"
            >
              <FileText className="w-4 h-4" />
              GET INQUIRY
            </Button>
            <Button variant="ghost" size="icon" className={cn("lg:hidden", isScrolled ? "text-foreground" : "text-white")}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
