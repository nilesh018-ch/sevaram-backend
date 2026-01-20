import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';
import mainBambooImg from '../assets/generated_images/bamboo_handicraft_main_123.png';

// Updated correct filenames from the environment
import foodVegImg from '@assets/stock_images/fresh_green_vegetabl_68153461.jpg';
import textilesImg from '@assets/stock_images/luxurious_indian_sil_d46d7a81.jpg';

export const products = {
  categories: [
    { 
      id: "fruits", 
      label: "Fresh Fruits", 
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800", 
      count: "45 Products",
      description: "Premium export-quality fruits sourced from the best orchards across India."
    },
    { 
      id: "vegetables", 
      label: "Fresh Vegetables", 
      image: foodVegImg, 
      count: "62 Products",
      description: "Farm-fresh organic vegetables ensured with cold-chain supply."
    },
    { 
      id: "spices", 
      label: "Authentic Spices", 
      image: turmericImg, 
      count: "88 Products",
      description: "Finest turmeric, chilli, cumin, and blended spices from India."
    },
    { 
      id: "pulses", 
      label: "Premium Pulses", 
      image: pulsesImg, 
      count: "35 Products",
      description: "High-protein unpolished pulses and lentils, cleaned and graded."
    },
    { 
      id: "millets", 
      label: "Healthy Millets", 
      image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80&w=800", 
      count: "24 Products",
      description: "Traditional Indian millets like Bajra, Jowar, and Ragi."
    },
    { 
      id: "rices", 
      label: "Basmati & Non-Basmati Rice", 
      image: riceImg, 
      count: "56 Products",
      description: "Long-grain aromatic Basmati and nutritious Sona Masoori varieties."
    },
    { 
      id: "bamboo", 
      label: "Bombu & Habdi Handicrafts", 
      image: mainBambooImg, 
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
        headline: "Expert Customs Clearance",
        intro: "Proper customs clearance is key to ensuring smooth business operations.",
        benefitHeadline: "Compliance in B2B",
        benefitText: "Accurate and organized documentation is vital to B2B transactions.",
        subServices: [
          { title: "Customs Documentation", desc: "Assistance with import-export customs paperwork." },
          { title: "Invoice Prep", desc: "Accurate invoices and bills of lading." }
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
        intro: "Efficient supply chain management is the backbone of trade.",
        benefitHeadline: "Global Shipping Reliability",
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
        benefitHeadline: "Documentation Importance",
        benefitText: "Accurate documentation is vital to smooth B2B operations.",
        subServices: [
          { title: "Customs Compliance", desc: "Ensuring adherence to trade laws." }
        ]
      }
    },
    {
      id: "web-design",
      title: "Web Designing",
      description: "Professional B2B marketplace and corporate website design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      serviceDetails: {
        headline: "Premium Web Design for Export Businesses",
        intro: "Your website is your global storefront in the digital age.",
        benefitHeadline: "Professional Digital Presence",
        benefitText: "We build SEO-optimized websites tailored for the export industry.",
        subServices: [
          { title: "B2B Marketplace Design", desc: "Platforms to showcase your global product catalog." },
          { title: "SEO Strategy", desc: "Rank higher for global trade keywords." }
        ]
      }
    }
  ],
  categoryProducts: {
    fruits: [
      { name: "Alphonso Mangoes", price: "Enquire", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", description: "Sweet and aromatic king of mangoes." }
    ],
    vegetables: [
      { name: "Organic Red Onions", price: "Enquire", image: foodVegImg, description: "High-quality Nasik onions." }
    ],
    spices: [
      { name: "Salem Turmeric Powder", price: "Enquire", image: turmericImg, description: "Pure turmeric with high curcumin content." }
    ],
    pulses: [
      { name: "Toor Dal (Arhar)", price: "Enquire", image: pulsesImg, description: "Cleaned and graded unpolished pulses." }
    ],
    millets: [
      { name: "Pearl Millet (Bajra)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Nutritious and gluten-free." }
    ],
    rices: [
      { name: "1121 Basmati Rice", price: "Enquire", image: riceImg, description: "Extra-long grain aromatic basmati rice." }
    ],
    bamboo: [
      // Home Decor
      { name: "Bamboo Flower Vases", price: "Enquire", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=400", description: "Elegant decorative bamboo flower vases.", subCategory: "🏺 Home Décor Items" },
      { name: "Decorative Bamboo Baskets", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Beautifully woven decorative baskets.", subCategory: "🏺 Home Décor Items" },
      { name: "Handcrafted Wall Hangings", price: "Enquire", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400", description: "Traditional handcrafted bamboo wall art.", subCategory: "🏺 Home Décor Items" },
      { name: "Bamboo Table Centerpieces", price: "Enquire", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400", description: "Artistic centerpieces for dining tables.", subCategory: "🏺 Home Décor Items" },
      { name: "Natural Fiber Showpieces", price: "Enquire", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly decorative showpieces.", subCategory: "🏺 Home Décor Items" },
      
      // Storage
      { name: "Bamboo Storage Bins", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Sustainable storage solutions.", subCategory: "🧺 Storage & Utility Products" },
      { name: "Handwoven Baskets", price: "Enquire", image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400", description: "Multipurpose handwoven baskets.", subCategory: "🧺 Storage & Utility Products" },
      { name: "Bamboo Laundry Baskets", price: "Enquire", image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400", description: "Handmade laundry storage.", subCategory: "🧺 Storage & Utility Products" },
      { name: "Grain & Rice Storage", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Traditional containers for grains.", subCategory: "🧺 Storage & Utility Products" },
      { name: "Handmade Utility Trays", price: "Enquire", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", description: "Durable handmade utility trays.", subCategory: "🧺 Storage & Utility Products" },

      // Kitchen
      { name: "Bamboo Serving Trays", price: "Enquire", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly serving trays.", subCategory: "🍽️ Kitchen & Dining Products" },
      { name: "Bamboo Bread Baskets", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Woven baskets for kitchen use.", subCategory: "🍽️ Kitchen & Dining Products" },
      { name: "Bamboo Cutlery Holders", price: "Enquire", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", description: "Organized cutlery storage.", subCategory: "🍽️ Kitchen & Dining Products" },
      { name: "Bamboo Plates & Bowls", price: "Enquire", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly dining sets.", subCategory: "🍽️ Kitchen & Dining Products" },
      { name: "Bamboo Tea Coasters", price: "Enquire", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400", description: "Set of handcrafted coasters.", subCategory: "🍽️ Kitchen & Dining Products" },

      // Furniture
      { name: "Bamboo Stools", price: "Enquire", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=400", description: "Strong and portable bamboo stools.", subCategory: "🪑 Furniture & Large Handicrafts" },
      { name: "Bamboo Chairs & Tables", price: "Enquire", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400", description: "Handcrafted furniture sets.", subCategory: "🪑 Furniture & Large Handicrafts" },
      { name: "Bamboo Shelves", price: "Enquire", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400", description: "Elegant bamboo storage shelves.", subCategory: "🪑 Furniture & Large Handicrafts" },
      { name: "Bamboo Room Dividers", price: "Enquire", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400", description: "Artistic partitions for rooms.", subCategory: "🪑 Furniture & Large Handicrafts" },
      { name: "Bamboo Lamp Stands", price: "Enquire", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400", description: "Sturdy bamboo stands for lamps.", subCategory: "🪑 Furniture & Large Handicrafts" },

      // Lighting
      { name: "Bamboo Hanging Lamps", price: "Enquire", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400", description: "Warm hanging light fixtures.", subCategory: "🕯️ Lighting & Lamps" },
      { name: "Bamboo Table Lamps", price: "Enquire", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly desk lighting.", subCategory: "🕯️ Lighting & Lamps" },
      { name: "Bamboo Lanterns", price: "Enquire", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400", description: "Traditional decorative lanterns.", subCategory: "🕯️ Lighting & Lamps" },
      { name: "Decorative Light Shades", price: "Enquire", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400", description: "Artistic bamboo light covers.", subCategory: "🕯️ Lighting & Lamps" },

      // Gift Items
      { name: "Bamboo Gift Boxes", price: "Enquire", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", description: "Handmade bamboo gift packaging.", subCategory: "🎁 Gift & Handcrafted Items" },
      { name: "Corporate Gift Sets", price: "Enquire", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly gifts for professionals.", subCategory: "🎁 Gift & Handcrafted Items" },
      { name: "Custom Bamboo Products", price: "Enquire", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", description: "Bespoke bamboo items for bulk.", subCategory: "🎁 Gift & Handcrafted Items" },

      // Garden
      { name: "Bamboo Plant Pots", price: "Enquire", image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly garden planters.", subCategory: "🌱 Garden & Outdoor Products" },
      { name: "Bamboo Garden Fencing", price: "Enquire", image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&q=80&w=400", description: "Sustainable garden partitions.", subCategory: "🌱 Garden & Outdoor Products" },
      { name: "Bamboo Bird Houses", price: "Enquire", image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&q=80&w=400", description: "Handcrafted shelters for birds.", subCategory: "🌱 Garden & Outdoor Products" },
      { name: "Bamboo Wind Chimes", price: "Enquire", image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80&w=400", description: "Natural sounding garden decor.", subCategory: "🌱 Garden & Outdoor Products" },

      // Fashion
      { name: "Bamboo Handbags", price: "Enquire", image: "https://images.unsplash.com/photo-1544816153-199d8217527d?auto=format&fit=crop&q=80&w=400", description: "Trendy bamboo fashion bags.", subCategory: "👜 Fashion & Lifestyle Accessories" },
      { name: "Bamboo Jewelry Boxes", price: "Enquire", image: "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&q=80&w=400", description: "Safe storage for accessories.", subCategory: "👜 Fashion & Lifestyle Accessories" },
      { name: "Bamboo Bangles", price: "Enquire", image: "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly bamboo jewelry.", subCategory: "👜 Fashion & Lifestyle Accessories" },
      { name: "Eco-Friendly Wallets", price: "Enquire", image: "https://images.unsplash.com/photo-1544816153-199d8217527d?auto=format&fit=crop&q=80&w=400", description: "Natural fiber pouches and wallets.", subCategory: "👜 Fashion & Lifestyle Accessories" }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: textilesImg, description: "Hand-loomed Banarasi silk saree." }
    ]
  },
  trending: [
    { id: "t1", name: "Bamboo Flower Vase", category: "Handicrafts", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=400", price: "Enquire" }
  ],
  counters: [
    { label: "Suppliers", count: "5000+" },
    { label: "Products", count: "10000+" },
    { label: "Countries", count: "50+" },
    { label: "Years Experience", count: "15+" }
  ],
  testimonials: [
    { name: "Ahmed Al-Farsi", country: "UAE", text: "Expert sourcing partners from India." }
  ]
};
