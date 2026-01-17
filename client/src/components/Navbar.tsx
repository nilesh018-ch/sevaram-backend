import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItems = () => (
    <>
      <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Home</button>
      <button onClick={() => scrollToSection("products")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Products</button>
      <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">About Us</button>
      <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Contact</button>
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-border/50 py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold font-serif text-xl">
            I
          </div>
          <span className={cn("text-xl font-bold font-serif tracking-tight", isScrolled ? "text-foreground" : "text-white")}>
            Indian Masala<span className="text-primary">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className={cn("hidden md:flex items-center gap-8", isScrolled ? "text-foreground" : "text-white/90")}>
          <NavItems />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant={isScrolled ? "default" : "secondary"}
            className={cn("font-medium", !isScrolled && "bg-white text-primary hover:bg-white/90")}
            onClick={() => scrollToSection("contact")}
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <NavItems />
                <Button className="w-full" onClick={() => scrollToSection("contact")}>Get Quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
