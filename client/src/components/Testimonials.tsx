import { products } from "@/lib/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-left relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-primary">{t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
