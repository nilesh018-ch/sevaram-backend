import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import { Info, Eye } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function ShopByCategory() {
  const [, setLocation] = useLocation();
  const { categories, categoryProducts } = useStore();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Grid - Matching Busyexim Circle Layout */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
            <div className="w-20 h-1 bg-secondary mt-2"></div>
          </div>
          <Button variant="link" className="text-primary font-bold">View All</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center cursor-pointer"
              onClick={() => setLocation(`/category/${cat.id}`)}
            >
              <div className="relative aspect-square rounded-full overflow-hidden bg-muted group-hover:ring-8 ring-secondary/10 transition-all duration-500 shadow-lg mx-auto max-w-[200px]">
                <img 
                  src={cat.image} 
                  alt={cat.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white text-primary p-2 rounded-full shadow-lg">
                     <Info className="w-6 h-6" />
                   </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">{cat.label}</h3>
                <p className="text-xs text-muted-foreground font-medium uppercase mt-1">{cat.count}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Product Sections - Same as Busyexim Home Page */}
        {categories.map((cat) => (
          <div key={`section-${cat.id}`} className="mt-24 border-t pt-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground">{cat.label}</h2>
                <div className="w-20 h-1 bg-secondary mt-2"></div>
              </div>
              <Button variant="link" className="text-primary font-bold" onClick={() => setLocation(`/category/${cat.id}`)}>View All</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(categoryProducts[cat.id] || []).slice(0, 4).map((item, idx) => (
                <motion.div 
                  key={`${cat.id}-${idx}`} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 cursor-pointer"
                  onClick={() => setLocation(`/category/${cat.id}`)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Eye className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{item.name}</h4>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-secondary font-black text-xl">{item.price}</span>
                      <Button variant="ghost" size="sm" className="text-primary font-bold p-0 h-auto hover:bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
