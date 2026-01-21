import { Heart, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Generate a realistic starting number and increment it
    const startCount = 12540 + Math.floor(Math.random() * 100);
    setVisitorCount(startCount);
    
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img src="https://sevarameximserve.com/wp-content/uploads/2025/10/cropped-3D-1.jpg" alt="Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-3xl font-black leading-none tracking-tighter text-[#00aeef]">SEVARAM</span>
                <div className="flex items-center w-full mt-1">
                  <div className="h-[2px] flex-1 bg-white/20"></div>
                  <span className="text-[10px] font-bold leading-none px-2 whitespace-nowrap text-white/60">EXIMCO AND SERVICES</span>
                  <div className="h-[2px] flex-1 bg-white/20"></div>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for premium quality Indian spices, handicrafts, and agricultural commodities. Exporting the excellence of India to the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Indian Spices</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pulses & Lentils</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rice Varieties</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Millets & Grains</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe for latest updates and market trends.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary px-3 py-2 rounded text-white text-sm font-medium hover:bg-primary/90">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Sevaram Eximco and Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
