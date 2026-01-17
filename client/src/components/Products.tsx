import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("spices");

  const categories = [
    { id: "spices", label: "Spices" },
    { id: "pulses", label: "Pulses" },
    { id: "rice", label: "Rice" },
    { id: "millets", label: "Millets" },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-accent">Our Premium Products</h2>
          <p className="text-muted-foreground text-lg">
            Sourced directly from farmers across India, processed with care, and packed to retain freshness.
          </p>
        </div>

        <Tabs defaultValue="spices" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="h-auto p-1 bg-white/50 backdrop-blur border border-border/50 rounded-full">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-full px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products[cat.id as keyof typeof products].map((item: any, index: number) => (
                  <Card key={item.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="rounded-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6">
                      <Button variant="ghost" className="w-full justify-between hover:text-primary group/btn p-0 hover:bg-transparent">
                        Enquire Now 
                        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
