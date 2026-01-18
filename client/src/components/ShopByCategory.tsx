import { useState } from "react";
import { products } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, X, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function ShopByCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const activeCategory = selectedCategory 
    ? products.categories.find(c => c.id === selectedCategory)
    : null;

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
            </div>
          ))}
        </div>

        {/* Modal for Category Details & Products */}
        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-0">
            <div className="relative h-64 w-full">
               <img src={activeCategory?.image} alt={activeCategory?.label} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">{activeCategory?.label}</h2>
                  <p className="text-white/80 max-w-2xl">{activeCategory?.description}</p>
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Available Products <span className="text-sm font-normal text-muted-foreground">({activeCategory?.count})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeProducts?.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(item);
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="rounded-full shadow-lg">
                          Product Info
                        </Button>
                      </div>
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
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal for Specific Product Details */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
                 <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                <DialogHeader className="p-0">
                  <DialogTitle className="text-3xl font-bold text-primary leading-tight">{selectedProduct?.name}</DialogTitle>
                </DialogHeader>
                <div className="text-2xl font-black text-secondary">{selectedProduct?.price}</div>
                <div className="space-y-4">
                  <h5 className="font-bold text-foreground">Description:</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct?.description || "High-quality product sourced directly from verified Indian suppliers. Export quality packaging and timely delivery guaranteed."}
                  </p>
                </div>
                <Button className="w-full h-12 bg-primary text-white font-bold rounded-xl mt-4 shadow-lg shadow-primary/20">
                  Send Export Enquiry
                </Button>
              </div>
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
              <Button variant="link" className="text-primary font-bold" onClick={() => setSelectedCategory(cat.id)}>View All</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(products.categoryProducts[cat.id as keyof typeof products.categoryProducts] || []).slice(0, 4).map((item, idx) => (
                <div 
                  key={`${cat.id}-${idx}`} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
