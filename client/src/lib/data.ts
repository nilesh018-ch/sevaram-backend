import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';
import mainBambooImg from '../assets/generated_images/bamboo_handicraft_main_123.png';
import mainVegImg from '../assets/generated_images/vegetables_main_123.png';
import mainPulsesImg from '../assets/generated_images/pulses_main_123.png';

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
      { name: "Banana (Cavendish)", price: "Enquire", image: "https://images.unsplash.com/photo-1571771894821-ad9b5886479c?auto=format&fit=crop&q=80&w=400", description: "Premium quality Cavendish bananas for export." },
      { name: "Mango (Alphonso)", price: "Enquire", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", description: "The king of mangoes, sweet and aromatic Alphonso." },
      { name: "Mango (Kesar)", price: "Enquire", image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=400", description: "Sweet and pulpy Kesar mangoes from Gujarat." },
      { name: "Pomegranate", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Juicy red pomegranates with high antioxidant value." },
      { name: "Grapes (Green)", price: "Enquire", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=400", description: "Fresh seedless green grapes." },
      { name: "Grapes (Black)", price: "Enquire", image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?auto=format&fit=crop&q=80&w=400", description: "Sweet and juicy black grapes." },
      { name: "Apple", price: "Enquire", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=400", description: "Crisp and fresh export-grade apples." },
      { name: "Orange", price: "Enquire", image: "https://images.unsplash.com/photo-1582722872445-41DC50bfce30?auto=format&fit=crop&q=80&w=400", description: "Juicy oranges packed with Vitamin C." },
      { name: "Pineapple", price: "Enquire", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400", description: "Fresh tropical pineapples." },
      { name: "Papaya", price: "Enquire", image: "https://images.unsplash.com/photo-1526470494524-894128b7ca02?auto=format&fit=crop&q=80&w=400", description: "Ripe and healthy papayas." },
      { name: "Watermelon", price: "Enquire", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400", description: "Hydrating and sweet watermelons." },
      { name: "Muskmelon", price: "Enquire", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400", description: "Fragrant and sweet muskmelons." }
    ],
    vegetables: [
      // High-Demand Export Vegetables
      { name: "Fresh Red Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400", description: "Premium quality red onions for global export.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "White Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&q=80&w=400", description: "Crisp and fresh export-grade white onions.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Garlic (Normal & Big Size)", price: "Enquire", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=400", description: "Graded garlic bulbs in various export sizes.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Ginger (Fresh / Air-dried)", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "High-aroma fresh and air-dried ginger.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Green Chillies", price: "Enquire", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=400", description: "Sharp and pungent fresh green chillies.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Red Chillies (Fresh)", price: "Enquire", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=400", description: "Vibrant and spicy fresh red chillies.", subCategory: "🌶️ High-Demand Export Vegetables" },
      
      // Common Fresh Vegetables (Bulk Export)
      { name: "Fresh Tomatoes", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "Farm-fresh ripe tomatoes for bulk supply.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Potatoes", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "High-quality starchy potatoes for export.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Carrots", price: "Enquire", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400", description: "Crunchy and sweet farm-fresh carrots.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Beetroot", price: "Enquire", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400", description: "Deep red nutritious beetroots.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Cabbage", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "Freshly harvested compact cabbage heads.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Cauliflower", price: "Enquire", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&q=80&w=400", description: "Clean and white export-grade cauliflower.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },

      // Green & Leafy Vegetables
      { name: "Cucumber", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Hydrating and fresh export cucumbers.", subCategory: "🥒 Green & Leafy Vegetables" },
      { name: "Bottle Gourd", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Traditional fresh bottle gourd.", subCategory: "🥒 Green & Leafy Vegetables" },
      { name: "Bitter Gourd", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Nutritious and fresh bitter gourd.", subCategory: "🥒 Green & Leafy Vegetables" },
      { name: "Ridge Gourd", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Freshly picked ridge gourd.", subCategory: "🥒 Green & Leafy Vegetables" },
      { name: "Sponge Gourd", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Tender sponge gourd for international markets.", subCategory: "🥒 Green & Leafy Vegetables" },
      { name: "Zucchini", price: "Enquire", image: "https://images.unsplash.com/photo-1449333254728-79e2e2321851?auto=format&fit=crop&q=80&w=400", description: "Premium export-quality zucchini.", subCategory: "🥒 Green & Leafy Vegetables" },

      // Premium & International Market Vegetables
      { name: "Bell Peppers (Red, Yellow, Green)", price: "Enquire", image: "https://images.unsplash.com/photo-1566384842113-ad735a790b88?auto=format&fit=crop&q=80&w=400", description: "Colorful and fresh premium bell peppers.", subCategory: "🌽 Premium & International Market Vegetables" },
      { name: "Baby Corn", price: "Enquire", image: "https://images.unsplash.com/photo-1566384842113-ad735a790b88?auto=format&fit=crop&q=80&w=400", description: "Tender and sweet export-grade baby corn.", subCategory: "🌽 Premium & International Market Vegetables" },
      { name: "Broccoli", price: "Enquire", image: "https://images.unsplash.com/photo-1566384842113-ad735a790b88?auto=format&fit=crop&q=80&w=400", description: "Premium quality fresh broccoli florets.", subCategory: "🌽 Premium & International Market Vegetables" },
      { name: "Lettuce (Iceberg / Romaine)", price: "Enquire", image: "https://images.unsplash.com/photo-1566384842113-ad735a790b88?auto=format&fit=crop&q=80&w=400", description: "Crisp and fresh export lettuce varieties.", subCategory: "🌽 Premium & International Market Vegetables" },
      { name: "Cherry Tomatoes", price: "Enquire", image: "https://images.unsplash.com/photo-1566384842113-ad735a790b88?auto=format&fit=crop&q=80&w=400", description: "Sweet and vibrant cherry tomatoes.", subCategory: "🌽 Premium & International Market Vegetables" },

      // Beans & Pods
      { name: "Green Beans", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "Freshly harvested green beans.", subCategory: "🫘 Beans & Pods" },
      { name: "Cluster Beans (Gawar)", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "High-quality cluster beans for export.", subCategory: "🫘 Beans & Pods" },
      { name: "French Beans", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "Tender and fresh French beans.", subCategory: "🫘 Beans & Pods" },
      { name: "Peas (Fresh / Frozen)", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "Sweet green peas in bulk export quality.", subCategory: "🫘 Beans & Pods" },

      // Herbs (High Value)
      { name: "Fresh Coriander", price: "Enquire", image: "https://images.unsplash.com/photo-1466632348740-99ef0f47d96c?auto=format&fit=crop&q=80&w=400", description: "Aromatic fresh coriander leaves.", subCategory: "🌿 Herbs (High Value – Air Cargo Export)" },
      { name: "Mint Leaves", price: "Enquire", image: "https://images.unsplash.com/photo-1466632348740-99ef0f47d96c?auto=format&fit=crop&q=80&w=400", description: "Refreshing and aromatic fresh mint.", subCategory: "🌿 Herbs (High Value – Air Cargo Export)" },
      { name: "Curry Leaves", price: "Enquire", image: "https://images.unsplash.com/photo-1466632348740-99ef0f47d96c?auto=format&fit=crop&q=80&w=400", description: "Traditional aromatic curry leaves.", subCategory: "🌿 Herbs (High Value – Air Cargo Export)" },
      { name: "Basil", price: "Enquire", image: "https://images.unsplash.com/photo-1466632348740-99ef0f47d96c?auto=format&fit=crop&q=80&w=400", description: "Fresh premium basil for international markets.", subCategory: "🌿 Herbs (High Value – Air Cargo Export)" },
      { name: "Spinach", price: "Enquire", image: "https://images.unsplash.com/photo-1466632348740-99ef0f47d96c?auto=format&fit=crop&q=80&w=400", description: "Fresh and nutritious export spinach.", subCategory: "🌿 Herbs (High Value – Air Cargo Export)" }
    ],
    spices: [
      { name: "Salem Turmeric Powder", price: "Enquire", image: turmericImg, description: "Pure turmeric with high curcumin content." }
    ],
    pulses: [
      { name: "Kabuli Chana (Chickpeas)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Large export-grade Kabuli Chickpeas." },
      { name: "Toor Dal (Pigeon Peas)", price: "Enquire", image: pulsesImg, description: "Unpolished and graded split pigeon peas." },
      { name: "Masoor Dal (Red Lentils)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Cleaned and sorted red lentils." },
      { name: "Urad Dal (Whole & Split)", price: "Enquire", image: pulsesImg, description: "High-protein black gram (whole and split)." },
      { name: "Moong Dal (Whole & Split)", price: "Enquire", image: pulsesImg, description: "Fresh and nutritious green gram (whole and split)." },
      { name: "Rajma (Red Kidney Beans)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Premium quality red kidney beans." },
      { name: "Black Eyed Peas (Lobia)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "Hand-sorted black-eyed peas." },
      { name: "White Peas (Safed Vatana)", price: "Enquire", image: "https://images.unsplash.com/photo-1585915607448-4e1ca158525e?auto=format&fit=crop&q=80&w=400", description: "High-quality dried white peas." },
      { name: "Green Peas (Dried)", price: "Enquire", image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=400", description: "Premium dried green peas." },
      { name: "Horse Gram (Kulthi Dal)", price: "Enquire", image: pulsesImg, description: "Nutritious and traditional Indian horse gram." }
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
