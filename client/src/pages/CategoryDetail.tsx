import { motion } from "framer-motion";
import { useRoute, useLocation } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Info, ArrowLeft, ShieldCheck, Zap, Globe } from "lucide-react";

export default function CategoryDetail() {
  const [, params] = useRoute("/category/:id");
  const [, setLocation] = useLocation();
  const catId = params?.id;

  const category = products.categories.find((c) => c.id === catId);
  const catProducts = products.categoryProducts[catId as keyof typeof products.categoryProducts] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [catId]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => setLocation("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

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

        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden mt-6">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={category.image} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-20">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-3xl space-y-4"
              >
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  {category.count}
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {category.label}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 px-8 lg:px-20 bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-bold text-[#1a2b4b]">Available Products</h2>
              <div className="h-1 flex-1 bg-muted mx-8 hidden lg:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {catProducts.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white text-primary rounded-full font-bold shadow-lg">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-[#1a2b4b] group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-black text-secondary">{product.price}</span>
                      <Button size="sm" className="rounded-xl px-6 bg-primary font-bold">
                        Enquire
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-8 lg:px-20 bg-[#f0f4ff]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Quality Assured", desc: "Every product undergoes strict quality checks before shipping." },
                { icon: Zap, title: "Fast Export", desc: "Efficient logistics network for timely global deliveries." },
                { icon: Globe, title: "Global Reach", desc: "Trusted by buyers in over 50 countries worldwide." },
                { icon: Info, title: "Direct Source", desc: "Ethically sourced directly from local Indian farmers and artisans." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-[#1a2b4b] mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 lg:px-20 bg-white">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a2b4b] rounded-[4rem] p-16 text-center text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl lg:text-6xl font-bold">Interested in bulk orders?</h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  We offer competitive pricing and customized packaging for international bulk requirements. Connect with our export team today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Button className="bg-primary hover:bg-primary/90 h-16 px-12 rounded-full text-xl font-black shadow-2xl shadow-primary/40">
                    Get Bulk Quote
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 h-16 px-12 rounded-full text-xl font-black">
                    Download Catalog
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
