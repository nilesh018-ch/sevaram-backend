import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';

// Updated correct filenames from the environment
import foodVegImg from '@assets/stock_images/fresh_green_vegetabl_68153461.jpg';
import handicraftsImg from '@assets/stock_images/indian_traditional_h_2a7c17d5.jpg';
import bambooImg from '@assets/stock_images/indian_traditional_h_2a7c17d5.jpg'; 
import textilesImg from '@assets/stock_images/luxurious_indian_sil_d46d7a81.jpg';

export const products = {
  categories: [
    { 
      id: "fruits", 
      label: "Fresh Fruits", 
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800", 
      count: "45 Products",
      description: "Premium export-quality fruits sourced from the best orchards across India. Hand-picked and packed with care."
    },
    { 
      id: "vegetables", 
      label: "Fresh Vegetables", 
      image: foodVegImg, 
      count: "62 Products",
      description: "Farm-fresh organic vegetables. We ensure a cold-chain supply to maintain peak freshness for global export."
    },
    { 
      id: "spices", 
      label: "Authentic Spices", 
      image: turmericImg, 
      count: "88 Products",
      description: "India is the land of spices. We provide the finest turmeric, chilli, cumin, and blended spices with high aromatic value."
    },
    { 
      id: "pulses", 
      label: "Premium Pulses", 
      image: pulsesImg, 
      count: "35 Products",
      description: "High-protein unpolished pulses and lentils. Cleaned, graded, and packed under hygienic conditions."
    },
    { 
      id: "millets", 
      label: "Healthy Millets", 
      image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80&w=800", 
      count: "24 Products",
      description: "The superfood of the future. We offer Bajra, Jowar, Ragi, and other traditional Indian millets."
    },
    { 
      id: "rices", 
      label: "Basmati & Non-Basmati Rice", 
      image: riceImg, 
      count: "56 Products",
      description: "From long-grain aromatic Basmati to nutritious Sona Masoori, we export the finest rice varieties."
    },
    { 
      id: "bamboo", 
      label: "Bombu & Habdi Handicrafts", 
      image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=800", 
      count: "120+ Products",
      description: "Eco-friendly and sustainable bamboo products handcrafted by skilled artisans."
    },
    { 
      id: "textiles", 
      label: "Textiles", 
      image: textilesImg, 
      count: "79 Products",
      description: "Premium silk sarees, organic cotton fabrics, and high-tenacity yarns."
    }
  ],
  services: [
    {
      id: "cha",
      title: "CHA Services",
      description: "Smooth customs clearance with expert CHA services.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/18054.jpg",
      serviceDetails: {
        headline: "Expert Customs Clearance with Sevaram Exim",
        intro: "Proper customs clearance is key to ensuring smooth business operations.",
        benefitHeadline: "The Importance of Compliance in B2B",
        benefitText: "Accurate and organized documentation is vital to the smooth functioning of any B2B transaction.",
        subServices: [
          { title: "Customs Documentation", desc: "We assist with all import-export customs paperwork." },
          { title: "Invoice Prep", desc: "Accurate invoices and bills of lading." },
          { title: "Certificate of Origin", desc: "Obtain certificates for export of goods." }
        ]
      }
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Efficient and reliable logistics, delivering your goods on time.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg",
      serviceDetails: {
        headline: "Seamless Logistics Solutions",
        intro: "Efficient supply chain management is the backbone of successful trade.",
        benefitHeadline: "Reliability in Global Shipping",
        benefitText: "Timely delivery and safe handling are our top priorities.",
        subServices: [
          { title: "Sea Freight", desc: "Cost-effective international shipping." },
          { title: "Air Cargo", desc: "Fast and reliable air transport." }
        ]
      }
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Accurate and hassle-free documentation.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16051.jpg",
      serviceDetails: {
        headline: "Hassle-Free Documentation Services",
        intro: "In international trade, proper documentation is key.",
        benefitHeadline: "The Importance of Documentation in B2B",
        benefitText: "Accurate documentation is vital to the smooth functioning of B2B transactions.",
        subServices: [
          { title: "Customs Documentation", desc: "Ensuring compliance with trade laws." },
          { title: "Bill of Lading", desc: "Meeting international shipping standards." }
        ]
      }
    }
  ],
  categoryProducts: {
    fruits: [
      { name: "Alphonso Mangoes", price: "Enquire", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", description: "The king of mangoes, sweet and aromatic." },
      { name: "Red Pomegranates", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Juicy and vibrant pomegranates from Maharashtra." }
    ],
    vegetables: [
      { name: "Organic Red Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400", description: "High-quality Nasik onions for export." },
      { name: "Green Fresh Chillies", price: "Enquire", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=400", description: "Sharp and pungent fresh green chillies." }
    ],
    spices: [
      { name: "Salem Turmeric Powder", price: "Enquire", image: turmericImg, description: "Pure turmeric with high curcumin content." },
      { name: "Guntur Red Chilli", price: "Enquire", image: chilliImg, description: "Famous fiery red chillies from Guntur." }
    ],
    pulses: [
      { name: "Toor Dal (Arhar)", price: "Enquire", image: pulsesImg, description: "Cleaned and graded unpolished split pigeon peas." },
      { name: "Moong Dal", price: "Enquire", image: pulsesImg, description: "High-protein yellow split moong dal." }
    ],
    millets: [
      { name: "Pearl Millet (Bajra)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Nutritious and gluten-free pearl millet." },
      { name: "Finger Millet (Ragi)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Calcium-rich traditional finger millet." }
    ],
    rices: [
      { name: "1121 Basmati Rice", price: "Enquire", image: riceImg, description: "Extra-long grain aromatic basmati rice." },
      { name: "Sona Masoori Rice", price: "Enquire", image: riceImg, description: "Premium quality lightweight non-basmati rice." }
    ],
    bamboo: [
      { name: "Bamboo Flower Vase", price: "Enquire", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=400", description: "Elegant decorative bamboo flower vase." },
      { name: "Bamboo Storage Bin", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly storage solution." }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: textilesImg, description: "Hand-loomed Banarasi silk saree." }
    ]
  },
  trending: [
    { id: "t1", name: "Senna Leaves", category: "Foods", image: "https://busyexim.com/wp-content/uploads/2025/02/20241022_171934-scaled-1-430x320.jpg", price: "Enquire" },
    { id: "t2", name: "Alphonso Mango", category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", price: "Enquire" }
  ],
  counters: [
    { label: "Suppliers", count: "5000+" },
    { label: "Products", count: "10000+" },
    { label: "Countries", count: "50+" },
    { label: "Years Experience", count: "15+" }
  ],
  testimonials: [
    { name: "Ahmed Al-Farsi", country: "UAE", text: "The best sourcing partner from India." }
  ]
};
