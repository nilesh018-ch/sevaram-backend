import { ShieldCheck, Globe, Clock, BadgePercent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description: "Rigorous quality checks at every stage. We guarantee authentic taste and purity in every pack."
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Robust logistics network ensuring smooth delivery to any port in the world."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We value your time. Our efficient supply chain ensures your orders reach you on schedule."
    },
    {
      icon: BadgePercent,
      title: "Competitive Pricing",
      description: "Best market rates without compromising on quality. Direct sourcing helps us keep costs low."
    }
  ];

  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-white/80 text-lg">
            We don't just export products; we build lasting partnerships based on trust and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary mb-6">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
