import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4 text-primary">Indian Masala.</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for premium quality Indian spices and agricultural commodities. Exporting the essence of India to the world.
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
            © {new Date().getFullYear()} Indian Masala Export Hub. All rights reserved.
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
