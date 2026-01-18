import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';

// Updated correct filenames from the environment
import foodVegImg from '@assets/stock_images/fresh_green_vegetabl_68153461.jpg';
import handicraftsImg from '@assets/stock_images/indian_traditional_h_2a7c17d5.jpg';
import bambooImg from '@assets/stock_images/indian_traditional_h_2a7c17d5.jpg'; // Using same as placeholder
import textilesImg from '@assets/stock_images/luxurious_indian_sil_d46d7a81.jpg';

export const products = {
  categories: [
    { 
      id: "foods", 
      label: "Foods & Vegetables", 
      image: foodVegImg, 
      count: "74 Products",
      description: "We source the freshest organic vegetables and fruits directly from dedicated Indian farms. Our supply chain ensures minimal transit time to preserve nutritional value and peak freshness for global markets."
    },
    { 
      id: "handicrafts", 
      label: "Handicrafts", 
      image: handicraftsImg, 
      count: "97 Products",
      description: "Explore the soul of India through our artisanal handicrafts. From intricate brass work to traditional pottery, each piece tells a story of centuries-old craftsmanship and cultural heritage."
    },
    { 
      id: "bamboo", 
      label: "Bombu & Habdi Handicrafts", 
      image: bambooImg, 
      count: "120+ Products",
      description: "Eco-friendly and sustainable bamboo products handcrafted by skilled artisans. Our collection ranges from home decor and furniture to kitchenware and fashion accessories, all meeting export quality standards."
    },
    { 
      id: "textiles", 
      label: "Textiles", 
      image: textilesImg, 
      count: "79 Products",
      description: "Indian textiles are world-renowned for their quality and texture. Our collection includes premium silk sarees, organic cotton fabrics, and high-tenacity yarns sourced from the finest weaving centers."
    }
  ],
  services: [
    {
      id: "cha",
      title: "CHA Services",
      description: "Smooth customs clearance with expert CHA (Custom House Agent) services. We handle all documentation, assessment, and examination for your imports and exports.",
      fullContent: "Our Custom House Agency (CHA) services are designed to simplify the complex world of customs. We provide end-to-end support including: \n\n- Documentation and filing\n- Classification of goods\n- Duty assessment and payment\n- Physical examination of cargo\n- Final clearance and delivery.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/18054.jpg",
      serviceDetails: {
        headline: "Expert Customs Clearance with Sevaram Exim",
        intro: "In the complex world of international trade, proper customs clearance is key to ensuring smooth business operations.",
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
      description: "Efficient and reliable logistics, delivering your goods on time, every time.",
      fullContent: "We provide global logistics solutions that ensure your cargo reaches its destination safely and on time.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg",
      serviceDetails: {
        headline: "Seamless Logistics Solutions with Sevaram Exim",
        intro: "Efficient supply chain management is the backbone of successful international trade.",
        benefitHeadline: "Reliability in Global Shipping",
        benefitText: "Timely delivery and safe handling are our top priorities for every shipment.",
        subServices: [
          { title: "Sea Freight", desc: "Cost-effective international shipping via ocean routes." },
          { title: "Air Cargo", desc: "Fast and reliable air transport for urgent goods." },
          { title: "Inland Transport", desc: "Secure road and rail transport across borders." }
        ]
      }
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Accurate and hassle-free documentation for seamless trade transactions.",
      fullContent: "Trade documentation is critical. We assist with Bill of Lading, Certificates of Origin, Insurance, and all necessary paperwork.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16051.jpg",
      serviceDetails: {
        headline: "Hassle-Free Documentation Services with Sevaram Exim",
        intro: "In the complex world of international trade and B2B transactions, proper documentation is key to ensuring smooth business operations.",
        benefitHeadline: "The Importance of Documentation in B2B",
        benefitText: "Accurate and organized documentation is vital to the smooth functioning of any B2B transaction, especially when dealing with international suppliers or buyers.",
        subServices: [
          { title: "Customs Documentation", desc: "We assist with all import-export customs paperwork, ensuring compliance with international trade laws." },
          { title: "Invoice and Bill of Lading", desc: "Our team helps you create accurate invoices and bills of lading that meet international shipping standards." },
          { title: "Certificate of Origin", desc: "We help businesses obtain certificates of origin for the export of goods, proving where your products are manufactured." },
          { title: "Import and Export Licenses", desc: "Sevaram Exim assists businesses in obtaining the necessary licenses for importing and exporting goods." },
          { title: "Inspection Certificates", desc: "We facilitate inspections of goods before shipping, ensuring that all quality standards are met." }
        ]
      }
    },
    {
      id: "sourcing-india",
      title: "Sourcing India",
      description: "Discover the best of Indian craftsmanship, sourced directly for your business.",
      fullContent: "India offers a wealth of products. We act as your eyes and ears on the ground.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/untitled-24-66f60f9a5977a.webp",
      serviceDetails: {
        headline: "Direct Sourcing from India",
        intro: "Discover the richness of Indian products through our verified network of suppliers.",
        benefitHeadline: "Quality Assurance",
        benefitText: "We ensure that every product meets your specifications through rigorous quality audits.",
        subServices: [
          { title: "Supplier Sourcing", desc: "Finding the right manufacturing partner for your needs." },
          { title: "Price Negotiation", desc: "Ensuring you get the best competitive market rates." },
          { title: "Quality Audits", desc: "On-site inspections before any shipment." }
        ]
      }
    },
    {
      id: "sourcing-abroad",
      title: "Sourcing Abroad",
      description: "Expand your horizons with global sourcing solutions tailored to your needs.",
      fullContent: "Global sourcing made easy. We help you connect with international manufacturers and suppliers.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2150769942.jpg",
      serviceDetails: {
        headline: "Global Sourcing Solutions",
        intro: "Expand your reach by sourcing high-quality products from international markets.",
        benefitHeadline: "Global Compliance",
        benefitText: "We manage the complexities of international trade regulations for you.",
        subServices: [
          { title: "Global Network", desc: "Access to manufacturers across Asia, Europe, and America." },
          { title: "Risk Management", desc: "Verified supplier backgrounds and secure logistics." },
          { title: "Market Research", desc: "Finding trending products in global markets." }
        ]
      }
    },
    {
      id: "export-education",
      title: "Export Education",
      description: "Master the art of global trade with our expert-led courses.",
      fullContent: "Want to learn the export-import business? Our comprehensive courses cover everything.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2149178634.jpg",
      serviceDetails: {
        headline: "Master Global Trade with Our Courses",
        intro: "Empower yourself with the knowledge needed to succeed in the export-import industry.",
        benefitHeadline: "Expert-Led Learning",
        benefitText: "Our curriculum is designed by industry veterans with decades of experience.",
        subServices: [
          { title: "Basic Exporting", desc: "Learn the fundamentals of starting an export business." },
          { title: "Documentation Course", desc: "Master the paperwork required for global trade." },
          { title: "Market Finding", desc: "Strategies to find and verify international buyers." }
        ]
      }
    }
  ],
  categoryProducts: {
    foods: [
      { name: "Fresh Organic Turmeric", price: "Enquire", image: turmericImg, description: "Authentic Salem turmeric with high curcumin levels." },
      { name: "Kashmiri Red Chilli", price: "Enquire", image: chilliImg, description: "Deep red color with mild heat, perfect for global cuisines." },
      { name: "Basmati Extra Long Grain", price: "Enquire", image: riceImg, description: "Premium aged aromatic basmati rice with extra long grains." },
      { name: "Premium Toor Dal", price: "Enquire", image: pulsesImg, description: "Cleaned and graded unpolished split pigeon peas." }
    ],
    handicrafts: [
      { name: "Handcrafted Brass Vase", price: "Enquire", image: handicraftsImg, description: "Intricately carved brass vase from Moradabad." },
      { name: "Artisanal Wooden Decor", price: "Enquire", image: handicraftsImg, description: "Sheesham wood carvings with traditional motifs." },
      { name: "Terracotta Sculpture", price: "Enquire", image: handicraftsImg, description: "Earth-fired clay art from rural artisan clusters." }
    ],
    bamboo: [
      { name: "Bamboo Flower Vase", price: "Enquire", image: bambooImg, description: "Elegant decorative bamboo flower vase for home decor." },
      { name: "Bamboo Storage Bin", price: "Enquire", image: bambooImg, description: "Eco-friendly storage solution for organized living." },
      { name: "Bamboo Serving Tray", price: "Enquire", image: bambooImg, description: "Handcrafted serving tray for kitchen and dining." },
      { name: "Bamboo Hanging Lamp", price: "Enquire", image: bambooImg, description: "Stylish bamboo lamp for aesthetic interior lighting." },
      { name: "Bamboo Garden Planter", price: "Enquire", image: bambooImg, description: "Durable and natural planter for outdoor gardening." },
      { name: "Bamboo Handbag", price: "Enquire", image: bambooImg, description: "Fashionable and eco-friendly bamboo handbag." }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: textilesImg, description: "Hand-loomed Banarasi silk saree with gold zari work." },
      { name: "Organic Cotton Fabric", price: "Enquire", image: textilesImg, description: "Certified organic cotton fabric, soft and breathable." },
      { name: "Premium Yarn Spools", price: "Enquire", image: textilesImg, description: "High-tenacity cotton and polyester blend yarns." }
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
      name: "Bamboo Lamps",
      category: "Bamboo",
      image: bambooImg,
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
  ],
  bambooFeatures: [
    "Custom Design Available",
    "Bulk Supply Capability",
    "Eco-Friendly & Sustainable Materials",
    "Handmade by Skilled Artisans",
    "Export Quality Packaging"
  ]
};
