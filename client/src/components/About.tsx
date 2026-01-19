import { CheckCircle2 } from "lucide-react";
import shippingImg from '@assets/stock_images/shipping_container_p_755e747d.jpg';

export default function About() {
  const features = [
    "Government Recognized Export House",
    "ISO 22000:2018 Certified",
    "APEDA Registered Member",
    "Spices Board of India Registered",
    "Direct Sourcing from Farmers",
    "State-of-the-art Processing Units"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={shippingImg} 
                alt="Global Logistics" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-primary">
              <p className="font-serif text-4xl font-bold text-accent mb-1">15+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Years of Experience in Global Trade</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">About Our Company</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Bridging Indian Farms to Global Markets</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sevaram Eximco and Services is a premier exporter of high-quality Indian spices, agricultural commodities, and sustainable handicrafts. We take pride in connecting international buyers with the rich, authentic excellence of India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our commitment to quality, transparency, and timely delivery has made us a trusted partner for businesses across Europe, Middle East, USA, and Southeast Asia. We ensure every shipment meets stringent international safety and quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="Made in India" className="h-12 w-auto opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
