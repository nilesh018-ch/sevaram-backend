import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <section id="services" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
            <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-secondary"></div>
            <p className="text-muted-foreground text-lg">Explore →</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:-translate-y-3 transition-all duration-500 border border-border/40"
            >
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
                    onClick={() => setLocation(`/service/${service.id}`)}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
