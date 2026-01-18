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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
            <div className="w-20 h-1 bg-secondary mt-2"></div>
          </div>
          <Button variant="link" className="text-primary font-bold">View All Categories</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.categories.map((cat) => (
            <Card 
              key={cat.id} 
              className="group border-none shadow-none text-center cursor-pointer bg-transparent"
              onClick={() => setSelectedCategory(cat.id)}
            >
              <CardContent className="p-0 space-y-4">
                <div className="relative aspect-square rounded-full overflow-hidden bg-muted group-hover:ring-8 ring-secondary/10 transition-all duration-500 shadow-lg">
                  <img 
                    src={cat.image} 
                    alt={cat.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">Explore Products</span>
                  </div>
                </div>
                <div className="space-y-1">
                   <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">{cat.label}</h3>
                   <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">{cat.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Category Products */}
        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                {products.categories.find(c => c.id === selectedCategory)?.label} Products
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {activeProducts?.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition-shadow">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-secondary font-black">{item.price}</p>
                    </div>
                    <Button size="sm" className="w-fit">Get Best Quote</Button>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Featured Products / Trending Section */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
              <div className="w-20 h-1 bg-secondary mt-2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.trending.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50">
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
                      Inquiry Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
