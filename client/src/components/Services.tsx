import { useState } from "react";
import { products } from "@/lib/data";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <motion.div 
            initial={ { opacity: 0, x: -20 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
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
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { delay: idx * 0.1 } }
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
                    onClick={() => setSelectedService(service)}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Service Details - Matching User's Screenshots Design */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-[95vw] lg:max-w-7xl h-[90vh] overflow-y-auto rounded-[2rem] p-0 border-none bg-[#f8faff]">
            <AnimatePresence>
              {selectedService && (
                <motion.div 
                  initial={ { opacity: 0, scale: 0.95 } }
                  animate={ { opacity: 1, scale: 1 } }
                  exit={ { opacity: 0, scale: 0.95 } }
                  className="w-full h-full"
                >
                  {/* Top Section - Headline & Hero Image */}
                  <div className="bg-white px-8 py-16 lg:px-20 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h1 className="text-4xl lg:text-6xl font-bold text-[#1a2b4b] leading-tight">
                        {selectedService.serviceDetails.headline}
                      </h1>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {selectedService.serviceDetails.intro}
                      </p>
                    </div>
                    <div className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.title} 
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Middle Section - Importance with Image on Left */}
                  <div className="px-8 py-20 lg:px-20 flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <h2 className="text-3xl lg:text-5xl font-bold text-[#1a2b4b]">
                        {selectedService.serviceDetails.benefitHeadline}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {selectedService.serviceDetails.benefitText}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        By choosing Sevaram Exim, you gain access to professional {selectedService.title.toLowerCase()} services that ensure all your transactions meet legal and regulatory requirements. We take care of the paperwork so you can focus on growing your business.
                      </p>
                    </div>
                    <div className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
                      <img 
                        src="https://busyexim.com/wp-content/uploads/2024/09/16051.jpg" // Using documentation image as placeholder for benefit section
                        alt="Process Image" 
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Bottom Section - Our Services Grid */}
                  <div className="px-8 py-20 lg:px-20 space-y-12">
                    <div className="text-center space-y-4">
                      <h2 className="text-4xl font-bold text-[#1a2b4b]">Our {selectedService.title} Services</h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Sevaram Exim offers a full range of {selectedService.title.toLowerCase()} services that cover all aspects of international trade, including:
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedService.serviceDetails.subServices.map((sub: any, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-50">
                          <h3 className="text-xl font-bold text-[#1a2b4b] mb-3">{sub.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="bg-[#f0f4ff] px-8 py-20 lg:px-20 text-center space-y-12">
                    <h2 className="text-4xl font-bold text-[#1a2b4b]">Why Choose Sevaram Exim for {selectedService.title}?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {["Expertise", "Efficiency", "Security", "Custom Solutions"].map((feat, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-left">
                          <h3 className="text-xl font-bold text-[#1a2b4b] mb-3">{feat}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Our team of professionals has extensive experience in handling B2B trade requirements, ensuring that all your needs are met accurately and compliantly.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="px-8 py-20 lg:px-20 text-center bg-white">
                    <div className="max-w-4xl mx-auto space-y-8 bg-blue-50 p-12 rounded-[3rem]">
                       <h2 className="text-3xl font-bold text-[#1a2b4b]">Ready to streamline your global trade?</h2>
                       <Button className="bg-[#2a56ff] hover:bg-blue-700 text-white h-14 px-10 rounded-full text-lg font-bold">
                         Enquire Now
                       </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
