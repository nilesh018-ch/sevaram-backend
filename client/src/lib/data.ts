import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';

// Updated correct filenames from the environment
import foodVegImg from '@assets/stock_images/fresh_green_vegetabl_68153461.jpg';
import handicraftsImg from '@assets/stock_images/indian_traditional_h_2a7c17d5.jpg';
import machineryImg from '@assets/stock_images/industrial_machinery_8bcaf428.jpg';
import textilesImg from '@assets/stock_images/luxurious_indian_sil_d46d7a81.jpg';

export const products = {
  categories: [
    { id: "foods", label: "Foods & Vegetables", image: foodVegImg, count: "74 Products" },
    { id: "handicrafts", label: "Handicrafts", image: handicraftsImg, count: "97 Products" },
    { id: "machinery", label: "Machinery", image: machineryImg, count: "6 Products" },
    { id: "textiles", label: "Textiles", image: textilesImg, count: "79 Products" }
  ],
  services: [
    {
      id: "cha",
      title: "CHA Services",
      description: "Smooth customs clearance with expert CHA (Custom House Agent) services. We handle all documentation, assessment, and examination for your imports and exports.",
      fullContent: "Our Custom House Agency (CHA) services are designed to simplify the complex world of customs. We provide end-to-end support including: \n\n- Documentation and filing\n- Classification of goods\n- Duty assessment and payment\n- Physical examination of cargo\n- Final clearance and delivery.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/18054.jpg",
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Efficient and reliable logistics, delivering your goods on time, every time.",
      fullContent: "We provide global logistics solutions that ensure your cargo reaches its destination safely and on time. Our services include sea freight, air freight, and inland transportation with real-time tracking.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg",
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Accurate and hassle-free documentation for seamless trade transactions.",
      fullContent: "Trade documentation is critical. We assist with Bill of Lading, Certificates of Origin, Insurance, and all necessary export-import paperwork to ensure compliance with international regulations.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16051.jpg",
    },
    {
      id: "sourcing-india",
      title: "Sourcing India",
      description: "Discover the best of Indian craftsmanship, sourced directly for your business.",
      fullContent: "India offers a wealth of products. We act as your eyes and ears on the ground, finding the best suppliers, conducting quality audits, and negotiating prices for everything from textiles to machinery.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/untitled-24-66f60f9a5977a.webp",
    },
    {
      id: "sourcing-abroad",
      title: "Sourcing Abroad",
      description: "Expand your horizons with global sourcing solutions tailored to your needs.",
      fullContent: "Global sourcing made easy. We help you connect with international manufacturers and suppliers, ensuring high-quality imports that meet your specific business requirements.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2150769942.jpg",
    },
    {
      id: "export-education",
      title: "Export Education",
      description: "Master the art of global trade with our expert-led courses.",
      fullContent: "Want to learn the export-import business? Our comprehensive courses cover everything from market research and buyer finding to logistics and payments, empowering you to trade globally.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2149178634.jpg",
    }
  ],
  categoryProducts: {
    foods: [
      { name: "Fresh Organic Turmeric", price: "Enquire", image: turmericImg },
      { name: "Kashmiri Red Chilli", price: "Enquire", image: chilliImg },
      { name: "Basmati Extra Long Grain", price: "Enquire", image: riceImg },
      { name: "Premium Toor Dal", price: "Enquire", image: pulsesImg }
    ],
    handicrafts: [
      { name: "Handcrafted Brass Vase", price: "Enquire", image: handicraftsImg },
      { name: "Artisanal Wooden Decor", price: "Enquire", image: handicraftsImg },
      { name: "Terracotta Sculpture", price: "Enquire", image: handicraftsImg }
    ],
    machinery: [
      { name: "Industrial Centrifugal Pump", price: "Enquire", image: machineryImg },
      { name: "Precision Gear Set", price: "Enquire", image: machineryImg }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: textilesImg },
      { name: "Organic Cotton Fabric", price: "Enquire", image: textilesImg },
      { name: "Premium Yarn Spools", price: "Enquire", image: textilesImg }
    ]
  },
  trending: [
    {
      id: "t1",
      name: "Senna Leaves",
      category: "Foods",
      image: "https://busyexim.com/wp-content/uploads/2025/02/20241022_171934-scaled-1-430x320.jpg",
      price: "Enquire"
    },
    {
      id: "t2",
      name: "Handmade Pottery",
      category: "Handicrafts",
      image: handicraftsImg,
      price: "Enquire"
    },
    {
      id: "t3",
      name: "Industrial Valves",
      category: "Machinery",
      image: machineryImg,
      price: "Enquire"
    },
    {
      id: "t4",
      name: "Silk Sarees",
      category: "Textiles",
      image: textilesImg,
      price: "Enquire"
    }
  ],
  counters: [
    { label: "Suppliers", count: "5000+" },
    { label: "Products", count: "10000+" },
    { label: "Countries", count: "50+" },
    { label: "Years Experience", count: "15+" }
  ],
  testimonials: [
    {
      name: "Ahmed Al-Farsi",
      country: "UAE",
      text: "The best sourcing partner from India. Documentation was perfect."
    },
    {
      name: "John Smith",
      country: "USA",
      text: "Reliable logistics and high-quality spices. Highly recommended."
    }
  ]
};
