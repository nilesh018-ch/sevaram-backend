import { useState } from "react";
import { products } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ShopByCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeProducts = selectedCategory 
    ? products.categoryProducts[selectedCategory as keyof typeof products.categoryProducts]
    : null;

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
          {products.categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group text-center cursor-pointer"
              onClick={() => setSelectedCategory(cat.id)}
            >
              <div className="relative aspect-square rounded-full overflow-hidden bg-muted group-hover:ring-8 ring-secondary/10 transition-all duration-500 shadow-lg mx-auto max-w-[200px]">
                <img 
                  src={cat.image} 
                  alt={cat.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">{cat.label}</h3>
                <p className="text-xs text-muted-foreground font-medium uppercase mt-1">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Category Products */}
        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold border-b pb-4">
                {products.categories.find(c => c.id === selectedCategory)?.label}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {activeProducts?.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-foreground mb-1 line-clamp-1">{item.name}</h4>
                    <p className="text-secondary font-black mb-3">{item.price}</p>
                    <Button size="sm" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold">
                      Get Best Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Dynamic Product Sections - Same as Busyexim Home Page */}
        {products.categories.map((cat) => (
          <div key={`section-${cat.id}`} className="mt-24 border-t pt-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground">{cat.label}</h2>
                <div className="w-20 h-1 bg-secondary mt-2"></div>
              </div>
              <Button variant="link" className="text-primary font-bold">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(products.categoryProducts[cat.id as keyof typeof products.categoryProducts] || []).slice(0, 4).map((item, idx) => (
                <div key={`${cat.id}-${idx}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
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
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
