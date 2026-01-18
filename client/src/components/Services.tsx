import { useState } from "react";
import { products } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-secondary"></div>
            <p className="text-muted-foreground text-lg">Explore →</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.services.map((service, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:-translate-y-3 transition-all duration-500 border border-border/40">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                   <h3 className="text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                     {service.title}
                   </h3>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed h-20 overflow-hidden line-clamp-3">
                  {service.description}
                </p>
                <div className="pt-2">
                  <Button 
                    variant="link" 
                    className="group/btn p-0 text-primary hover:text-secondary text-lg font-bold transition-all h-auto"
                    onClick={() => setSelectedService(service)}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl rounded-[2rem]">
            <DialogHeader className="border-b pb-6">
              <DialogTitle className="text-4xl font-black text-primary uppercase tracking-tighter">{selectedService?.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-8 flex flex-col md:flex-row gap-10">
              <div className="md:w-5/12">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={selectedService?.image} alt={selectedService?.title} className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="md:w-7/12 space-y-6 flex flex-col justify-center">
                <p className="text-muted-foreground text-lg whitespace-pre-line leading-relaxed">
                  {selectedService?.fullContent}
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-2 text-foreground font-bold bg-muted p-3 rounded-2xl">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     Verified Process
                   </div>
                   <div className="flex items-center gap-2 text-foreground font-bold bg-muted p-3 rounded-2xl">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     24/7 Support
                   </div>
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 rounded-[1.5rem] text-xl font-black uppercase tracking-widest shadow-lg hover:shadow-secondary/20 transition-all">
                  Get Started Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
