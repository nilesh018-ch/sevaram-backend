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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Our Premium Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-muted-foreground">Comprehensive global trade solutions tailored to simplify your sourcing journey from India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.services.map((service, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:-translate-y-3 transition-all duration-500 border border-border/40">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                     {service.title}
                   </h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground text-base leading-relaxed h-14 overflow-hidden line-clamp-2">
                  {service.description}
                </p>
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white rounded-xl h-12 text-base font-bold transition-all"
                    onClick={() => setSelectedService(service)}
                  >
                    View Service Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-primary">{selectedService?.title}</DialogTitle>
              <DialogDescription className="text-lg mt-2">
                Detailed information about our {selectedService?.title} expertise.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img src={selectedService?.image} alt={selectedService?.title} className="w-full h-64 object-cover rounded-2xl shadow-lg" />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {selectedService?.fullContent}
                </p>
                <div className="space-y-2">
                   <div className="flex items-center gap-2 text-foreground font-bold">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     Verified Process
                   </div>
                   <div className="flex items-center gap-2 text-foreground font-bold">
                     <CheckCircle2 className="w-5 h-5 text-green-500" />
                     24/7 Expert Support
                   </div>
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white h-12 rounded-xl text-lg font-bold">
                  Enquire for this Service
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
