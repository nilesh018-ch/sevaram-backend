import { products } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ShopByCategory() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
          <Button variant="link" className="text-primary font-bold">View All</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.categories.map((cat) => (
            <Card key={cat.id} className="group border-none shadow-none text-center cursor-pointer">
              <CardContent className="p-0 space-y-4">
                <div className="aspect-square rounded-full overflow-hidden bg-muted group-hover:ring-4 ring-secondary/20 transition-all duration-300">
                  <img 
                    src={`https://busyexim.com/wp-content/uploads/2024/09/2147694073-768x768.jpg`} // Placeholder from link
                    alt={cat.label} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-secondary">{cat.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Trending Now</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.items.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <Button size="icon" className="absolute bottom-4 right-4 bg-secondary text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.category}</div>
                  <h4 className="font-bold text-foreground mb-2">{item.name}</h4>
                  <div className="text-secondary font-bold">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
