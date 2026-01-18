import { Truck, ShieldCheck, Leaf, CreditCard, Headphones } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Truck, text: "Low Prices", desc: "Than in Other Stores" },
    { icon: ShieldCheck, text: "Free Delivery", desc: "From $500 Orders" },
    { icon: Leaf, text: "Fresh Products", desc: "Every Day from Farms" },
    { icon: CreditCard, text: "Safe Payment", desc: "Secure Transactions" },
    { icon: Headphones, text: "24/7 Support", desc: "Always Be There for You" }
  ];

  return (
    <section className="py-12 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-foreground">{item.text}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
