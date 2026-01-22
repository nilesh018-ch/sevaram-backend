import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';
import mainBambooImg from '../assets/generated_images/bamboo_handicraft_main_123.png';
import mainVegImg from '../assets/generated_images/vegetables_main_123.png';
import mainPulsesImg from '../assets/generated_images/pulses_main_123.png';
import mainMilletsImg from '../assets/generated_images/millets_main_123.png';
import mainRiceImg from '../assets/generated_images/rice_main_123.png';
import mainTextilesImg from '../assets/generated_images/textiles_main_123.png';
import customBananaImg from '../assets/images/banana_custom.jpg';

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
      image: mainVegImg, 
      count: "62 Products",
      description: "Farm-fresh organic vegetables ensured with cold-chain supply for global markets."
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
      image: mainPulsesImg, 
      count: "35 Products",
      description: "High-protein unpolished pulses and lentils, cleaned and graded for export."
    },
    { 
      id: "millets", 
      label: "Healthy Millets", 
      image: mainMilletsImg, 
      count: "24 Products",
      description: "The superfood of the future. Traditional Indian millets like Bajra, Jowar, and Ragi."
    },
    { 
      id: "rices", 
      label: "Basmati & Non-Basmati Rice", 
      image: mainRiceImg, 
      count: "56 Products",
      description: "From long-grain aromatic Basmati to nutritious Sona Masoori varieties."
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
      image: mainTextilesImg, 
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
      { name: "Banana (Cavendish)", price: "Enquire", image: customBananaImg, description: "Premium quality Cavendish bananas for export." },
      { name: "Mango (Alphonso)", price: "Enquire", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", description: "The king of mangoes, sweet and aromatic Alphonso." },
      { name: "Mango (Kesar)", price: "Enquire", image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=400", description: "Sweet and pulpy Kesar mangoes from Gujarat." },
      { name: "Pomegranate", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Juicy red pomegranates with high antioxidant value." },
      { name: "Grapes (Green)", price: "Enquire", image: "https://unsplash.com/photos/a-pile-of-green-grapes--aEfs2OUBtU", description: "Fresh seedless green grapes." },
      { name: "Grapes (Black)", price: "Enquire", image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?auto=format&fit=crop&q=80&w=400", description: "Sweet and juicy black grapes." },
      { name: "Apple", price: "Enquire", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=400", description: "Crisp and fresh export-grade apples." },
      { name: "Orange", price: "Enquire", image: "https://images.unsplash.com/photo-1582722872445-41DC50bfce30?auto=format&fit=crop&q=80&w=400", description: "Juicy oranges packed with Vitamin C." },
      { name: "Pineapple", price: "Enquire", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400", description: "Fresh tropical pineapples." },
      { name: "Papaya", price: "Enquire", image: "https://images.unsplash.com/photo-1526470494524-894128b7ca02?auto=format&fit=crop&q=80&w=400", description: "Ripe and healthy papayas." },
      { name: "Watermelon", price: "Enquire", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400", description: "Hydrating and sweet watermelons." },
      { name: "Muskmelon", price: "Enquire", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400", description: "Fragrant and sweet muskmelons." }
    ],
    vegetables: [
      { name: "Fresh Red Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400", description: "Premium quality red onions for global export.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "White Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&q=80&w=400", description: "Crisp and fresh export-grade white onions.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Garlic", price: "Enquire", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=400", description: "Graded garlic bulbs.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Ginger", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Fresh and air-dried ginger.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Green Chillies", price: "Enquire", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=400", description: "Fresh green chillies.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Red Chillies (Fresh)", price: "Enquire", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=400", description: "Fresh red chillies.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Fresh Tomatoes", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "Farm-fresh tomatoes.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Potatoes", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "High-quality starchy potatoes.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" }
    ],
    spices: [
      { name: "Black Pepper", price: "Enquire", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400", description: "Premium quality bold black pepper." },
      { name: "Cardamom (Green)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Aromatic green cardamom pods." },
      { name: "Turmeric", price: "Enquire", image: turmericImg, description: "Pure turmeric with high curcumin content." },
      { name: "Cumin Seeds (Jeera)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "High-aroma Indian cumin seeds." },
      { name: "Coriander Seeds", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Fresh and flavorful coriander seeds." },
      { name: "Dry Red Chilli", price: "Enquire", image: chilliImg, description: "Kashmiri and Byadgi red chillies." },
      { name: "Ginger (Dry / Powder)", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Premium dry ginger and powder." },
      { name: "Cloves (Laung)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Highly aromatic cloves." },
      { name: "Cinnamon (Dalchini)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Natural cinnamon bark." },
      { name: "Fenugreek Seeds (Methi)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Nutritious fenugreek seeds." }
    ],
    pulses: [
      { name: "Kabuli Chana (Chickpeas)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Large export-grade Kabuli Chickpeas." },
      { name: "Toor Dal (Pigeon Peas)", price: "Enquire", image: pulsesImg, description: "Unpolished and graded split pigeon peas." },
      { name: "Masoor Dal (Red Lentils)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Cleaned and sorted red lentils." },
      { name: "Urad Dal", price: "Enquire", image: pulsesImg, description: "High-protein black gram." },
      { name: "Moong Dal", price: "Enquire", image: pulsesImg, description: "Fresh and nutritious green gram." },
      { name: "Rajma (Red Kidney Beans)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Premium quality red kidney beans." },
      { name: "Black Eyed Peas (Lobia)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Hand-sorted black-eyed peas." },
      { name: "White Peas", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "High-quality dried white peas." },
      { name: "Green Peas (Dried)", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "Premium dried green peas." },
      { name: "Horse Gram (Kulthi Dal)", price: "Enquire", image: pulsesImg, description: "Nutritious horse gram." }
    ],
    millets: [
      { name: "Pearl Millet (Bajra)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Nutritious pearl millet." },
      { name: "Finger Millet (Ragi)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Calcium-rich finger millet." },
      { name: "Foxtail Millet", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Healthy foxtail millet." },
      { name: "Barnyard Millet", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Premium barnyard millet." },
      { name: "Kodo Millet", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Nutritious kodo millet." },
      { name: "Little Millet", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "High-fiber little millet." },
      { name: "Gahu (Wheat Millets)", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Premium quality wheat millets." }
    ],
    rices: [
      { name: "1121 Basmati Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Extra-long grain aromatic basmati rice." },
      { name: "Sona Masoori Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Premium non-basmati rice." },
      { name: "Long Grain Parboiled Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "High-quality parboiled rice." },
      { name: "IR64 Raw Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Standard export quality IR64 rice." },
      { name: "Matta Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Traditional red matta rice." },
      { name: "Black Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400", description: "Nutritious premium black rice." }
    ],
    bamboo: [
      { name: "Bamboo Flower Vases", price: "Enquire", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=400", description: "Elegant bamboo flower vases.", subCategory: "🏺 Home Décor Items" },
      { name: "Bamboo Storage Bins", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Sustainable storage solutions.", subCategory: "🧺 Storage & Utility Products" }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: "https://images.unsplash.com/photo-1610030469915-9a08fa996e4a?auto=format&fit=crop&q=80&w=400", description: "Hand-loomed Banarasi silk saree." },
      { name: "Organic Cotton Fabric", price: "Enquire", image: "https://images.unsplash.com/photo-1528459840556-4293ca914a1e?auto=format&fit=crop&q=80&w=400", description: "Eco-friendly organic cotton." },
      { name: "Handcrafted Jute Bags", price: "Enquire", image: "https://images.unsplash.com/photo-1544816153-199d8217527d?auto=format&fit=crop&q=80&w=400", description: "Sustainable handcrafted jute bags." },
      { name: "Embroidered Textiles", price: "Enquire", image: "https://images.unsplash.com/photo-1610030469915-9a08fa996e4a?auto=format&fit=crop&q=80&w=400", description: "Exquisite traditional embroidery." },
      { name: "Linen Home Furnishings", price: "Enquire", image: "https://images.unsplash.com/photo-1528459840556-4293ca914a1e?auto=format&fit=crop&q=80&w=400", description: "Premium linen home textiles." },
      { name: "Printed Cotton Kurtis", price: "Enquire", image: "https://images.unsplash.com/photo-1610030469915-9a08fa996e4a?auto=format&fit=crop&q=80&w=400", description: "Fashionable printed cotton kurtis." }
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
