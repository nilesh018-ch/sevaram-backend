import { motion } from "framer-motion";
import { useRoute, useLocation } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function ServiceDetail() {
  const [, params] = useRoute("/service/:id");
  const [, setLocation] = useLocation();
  const serviceId = params?.id;

  const service = products.services.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => setLocation("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const sd = service.serviceDetails;

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      
      <main className="pt-20">
        {/* Back Button Container */}
        <div className="container mx-auto px-8 lg:px-20 pt-8">
          <Button 
            variant="ghost" 
            className="group flex items-center gap-2 text-[#1a2b4b] hover:text-primary font-bold pl-0"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </div>

        {/* Top Section - Headline & Hero Image */}
        <section className="bg-white px-8 py-16 lg:px-20 mt-6">
          <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1a2b4b] leading-tight">
                {sd.headline}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {sd.intro}
              </p>
              <Button className="bg-[#2a56ff] hover:bg-blue-700 text-white h-14 px-10 rounded-full text-lg font-bold">
                Get Best Quote
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Middle Section - Importance with Image on Left */}
        <section className="px-8 py-24 lg:px-20 bg-[#f8faff]">
          <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1a2b4b]">
                {sd.benefitHeadline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {sd.benefitText}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By choosing Sevaram Exim, you gain access to professional {service.title.toLowerCase()} services that ensure all your transactions meet legal and regulatory requirements. We take care of the paperwork so you can focus on growing your business.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://busyexim.com/wp-content/uploads/2024/09/16051.jpg"
                alt="Process Image" 
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Bottom Section - Our Services Grid */}
        <section className="px-8 py-24 lg:px-20 bg-white">
          <div className="container mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-[#1a2b4b]">Our {service.title} Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Sevaram Exim offers a full range of {service.title.toLowerCase()} services that cover all aspects of international trade, including:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sd.subServices.map((sub: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50 group hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-[#1a2b4b] mb-4 group-hover:text-[#2a56ff] transition-colors">{sub.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{sub.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-[#f0f4ff] px-8 py-24 lg:px-20">
          <div className="container mx-auto space-y-16">
            <h2 className="text-4xl font-bold text-[#1a2b4b] text-center">Why Choose Sevaram Exim for {service.title}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Expertise", "Efficiency", "Security", "Custom Solutions"].map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="text-2xl font-bold text-[#1a2b4b] mb-4">{feat}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team of professionals has extensive experience in handling B2B trade requirements, ensuring that all your needs are met accurately and compliantly.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24 lg:px-20 bg-white">
          <div className="container mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto space-y-8 bg-gradient-to-br from-[#2a56ff] to-[#1a2b4b] p-16 rounded-[4rem] text-white shadow-2xl"
            >
               <h2 className="text-4xl lg:text-5xl font-bold">Ready to streamline your global trade?</h2>
               <p className="text-white/80 text-xl max-w-2xl mx-auto">
                 Connect with our experts today and take your business to the global market with confidence.
               </p>
               <div className="pt-4">
                 <Button className="bg-white text-[#2a56ff] hover:bg-white/90 h-16 px-12 rounded-full text-xl font-black transition-transform hover:scale-105">
                   Enquire Now
                 </Button>
               </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
