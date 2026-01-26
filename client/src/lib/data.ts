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
import muskmelonImg from '../assets/images/muskmelon.jpg';
import papayaImg from '../assets/images/papaya.jpg';
import orangeImg from '../assets/images/orange.jpg';
import appleImg from '../assets/images/apple.jpg';
import grapesGreenImg from '../assets/images/grapes_green.jpg';
import pomegranateImg from '../assets/images/pomegranate.jpg';
import redOnionsImg from '../assets/images/red_onions.jpg';
import whiteOnionsImg from '../assets/images/white_onions.jpg';
import garlicImg from '../assets/images/garlic.jpg';
import gingerImg from '../assets/images/ginger.jpg';
import greenChilliesImg from '../assets/images/green_chillies.jpg';
import redChilliesImg from '../assets/images/red_chillies.jpg';
import tomatoesImg from '../assets/images/tomatoes.jpg';
import potatoesImg from '../assets/images/potatoes.jpg';

// Updated correct filenames from the environment
import foodVegImg from '@assets/stock_images/fresh_green_vegetabl_68153461.jpg';
import whitePeasImg from '../assets/images/white_peas.png';
import ir64RawRiceImg from '../assets/images/ir64_raw_rice.png';
import bambooToothbrushImg from '../assets/images/bamboo_toothbrush.jpg';
import bambooChairImg from '../assets/images/bamboo_chair.jpg';
import bambooStrawsImg from '../assets/images/bamboo_straws.jpg';
import bambooLampshadeImg from '../assets/images/bamboo_lampshade.jpg';
import coconutBowlImg from '../assets/images/coconut_bowl.jpg';
import juteHangingImg from '../assets/images/jute_hanging.jpg';

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
        headline: "Expert Customs House Agent (CHA) Services",
        intro: "In the complex world of international trade, navigating customs regulations is critical. Our expert CHA services ensure your cargo moves across borders without delay or compliance issues.",
        benefitHeadline: "Why Choose Our CHA Services?",
        benefitText: "We specialize in handling complex documentation and regulatory requirements, providing you with a seamless export-import experience that minimizes risks and maximizes efficiency.",
        subServices: [
          { title: "Customs Documentation", desc: "Complete handling of Bill of Entry, Shipping Bills, and necessary certificates for legal compliance." },
          { title: "Duty & Tax Consultancy", desc: "Expert advice on customs tariffs, duty structures, and potential tax exemptions for your specific products." },
          { title: "Regulatory Compliance", desc: "Ensuring all shipments adhere to the latest international trade laws and local customs regulations." },
          { title: "Liaison with Authorities", desc: "Professional coordination with customs officials to facilitate quick inspection and clearance of goods." }
        ]
      }
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Efficient and reliable logistics, delivering your goods on time.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg",
      serviceDetails: {
        headline: "End-to-End Global Logistics Solutions",
        intro: "Reliable logistics is the backbone of successful international trade. We offer comprehensive shipping solutions tailored to your specific cargo needs, ensuring timely and safe delivery anywhere in the world.",
        benefitHeadline: "Our Logistics Advantages",
        benefitText: "With a global network of partners and a commitment to operational excellence, we provide transparent tracking and optimized routing for all your export requirements.",
        subServices: [
          { title: "Ocean Freight", desc: "Full Container Load (FCL) and Less than Container Load (LCL) services for cost-effective global shipping." },
          { title: "Air Freight", desc: "Priority air cargo services for time-sensitive shipments that require rapid international delivery." },
          { title: "Warehousing & Distribution", desc: "Secure storage facilities and efficient inventory management to streamline your supply chain operations." },
          { title: "Last-Mile Delivery", desc: "Dedicated ground transportation ensuring your products reach their final destination safely and promptly." }
        ]
      }
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Accurate and hassle-free documentation.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      serviceDetails: {
        headline: "Hassle-Free Export Documentation Services",
        intro: "The success of a B2B export transaction often depends on the accuracy of the paperwork. Our team meticulously manages every document to prevent delays and ensure smooth financial transactions.",
        benefitHeadline: "Importance of Accurate Documentation",
        benefitText: "From certificates of origin to specialized quality reports, we handle all the paperwork so you can focus on growing your business while we ensure legal and financial safety.",
        subServices: [
          { title: "Export Invoicing", desc: "Preparation of professional commercial invoices and packing lists that meet international B2B standards." },
          { title: "Certificates of Origin", desc: "Official processing of GSP and Non-GSP certificates to facilitate preferential trade agreements." },
          { title: "Quality & Inspection Reports", desc: "Coordination with third-party agencies for necessary product inspections and certification reports." },
          { title: "Banking Documentation", desc: "Assistance with Letters of Credit (LC) and other bank-related documents for secure international payments." }
        ]
      }
    },
    {
      id: "web-design",
      title: "Web Designing",
      description: "Professional B2B marketplace and corporate website design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
      serviceDetails: {
        headline: "Premium Web Design for the Export Industry",
        intro: "Your website is your global digital storefront. We create high-performance B2B marketplaces and corporate websites that build trust with international buyers and showcase your products effectively.",
        benefitHeadline: "A Digital Presence That Converts",
        benefitText: "We combine modern design aesthetics with industry-specific functionality to ensure your website is not just a brochure, but a powerful lead-generation tool for your export business.",
        subServices: [
          { title: "B2B Marketplace Portals", desc: "Custom-built platforms with product catalogs, inquiry forms, and multi-language support." },
          { title: "Global SEO Strategy", desc: "Optimizing your website to rank for international trade keywords and attract high-quality global leads." },
          { title: "Responsive Mobile Design", desc: "Ensuring your website looks professional and functions perfectly on all devices, from desktops to smartphones." },
          { title: "Corporate Branding", desc: "Developing a cohesive digital identity that reflects the reliability and professionalism of your export brand." }
        ]
      }
    }
  ],
  categoryProducts: {
    fruits: [
      { name: "Banana (Cavendish)", price: "Enquire", image: customBananaImg, description: "Premium quality Cavendish bananas sourced from certified Indian plantations. These bananas are carefully selected for their size, sweetness, and export-grade quality. Perfect for international markets with strict quality standards." },
      { name: "Mango (Alphonso)", price: "Enquire", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400", description: "The world-renowned Alphonso mango, known for its rich, creamy texture and unparalleled sweetness. Hand-picked from the Ratnagiri region to ensure maximum flavor and aroma. A premium choice for discerning global fruit importers." },
      { name: "Mango (Kesar)", price: "Enquire", image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=400", description: "Sweet and pulpy Kesar mangoes from the fertile plains of Gujarat. Famous for their distinct saffron-colored pulp and incredible shelf life. Ideal for both fresh consumption and processing into premium juices." },
      { name: "Pomegranate", price: "Enquire", image: pomegranateImg, description: "Deep red, juicy pomegranates with high antioxidant value and superior nutritional profile. Our pomegranates are sorted and graded to meet international B2B standards. Highly sought after for their vibrant color and sweet-tart flavor." },
      { name: "Grapes (Green)", price: "Enquire", image: grapesGreenImg, description: "Crisp, seedless green grapes with a perfect balance of sweetness and acidity. Grown under optimal climatic conditions to ensure firm texture and extended shelf life. Carefully packed to maintain freshness during long-distance shipping." },
      { name: "Grapes (Black)", price: "Enquire", image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?auto=format&fit=crop&q=80&w=400", description: "Luscious black grapes characterized by their intense sweetness and deep, dark skin. These grapes are rich in natural sugars and vitamins, making them a popular healthy snack. Sourced from export-oriented vineyards across India." },
      { name: "Apple", price: "Enquire", image: appleImg, description: "High-grade apples sourced from the cool, high-altitude orchards of the Himalayas. Known for their crunchiness, vibrant color, and sweet juicy interior. We follow rigorous sorting processes to deliver only the finest quality apples." },
      { name: "Orange", price: "Enquire", image: orangeImg, description: "Zesty and refreshing oranges packed with Vitamin C and natural juice. These citrus fruits are hand-harvested to prevent bruising and maintain high aesthetic quality. A staple for both fresh juice markets and retail fruit counters." },
      { name: "Pineapple", price: "Enquire", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400", description: "Fresh tropical pineapples with a golden-yellow hue and a sweet, tangy flavor profile. Sourced from the northeastern regions of India, these pineapples are known for their high quality. Perfect for fresh slices, desserts, or commercial canning." },
      { name: "Papaya", price: "Enquire", image: papayaImg, description: "Ripe, vitamin-rich papayas with smooth skin and sweet orange flesh. Our papayas are harvested at the peak of ripeness to ensure maximum sweetness and nutritional benefits. Ideal for health-conscious consumers and fresh fruit distributors." },
      { name: "Watermelon", price: "Enquire", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400", description: "Hydrating and exceptionally sweet watermelons with firm, red flesh. Grown in sandy riverbeds, these watermelons are perfect for summer consumption. We offer graded sizes to accommodate various international market requirements." },
      { name: "Muskmelon", price: "Enquire", image: muskmelonImg, description: "Fragrant and sweet muskmelons with a distinct aroma and soft, orange pulp. These melons are carefully handled to preserve their delicate skin and ensure peak freshness. A refreshing choice for premium fruit baskets and hospitality services." }
    ],
    vegetables: [
      { name: "Fresh Red Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1668295037469-8b0e8d11cd2a?q=80&w=1171&auto=format&fit=crop", description: "Premium quality red onions known for their sharp flavor and long storage life. Sourced from the heart of India's onion-producing belts, they are perfect for culinary use. Our onions undergo thorough cleaning and grading for global export.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "White Onions", price: "Enquire", image: "https://images.unsplash.com/photo-1754993954918-403b0221e3e2?q=80&w=2070&auto=format&fit=crop", description: "Mild and sweet white onions with a crisp texture, ideal for salads and gourmet cooking. These onions are carefully cured to ensure they arrive in perfect condition at their destination. Highly preferred in European and Middle Eastern markets.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Garlic", price: "Enquire", image: garlicImg, description: "Pungent and flavorful garlic bulbs with tight skins and large cloves. Known for their medicinal properties and essential role in global cuisines. Our garlic is sorted by size and quality to meet the diverse needs of international buyers.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Ginger", price: "Enquire", image: gingerImg, description: "Fresh, fiber-rich ginger roots with a strong aroma and sharp, spicy taste. Sourced from organic-rich soils, our ginger is available in both fresh and semi-dried forms. A versatile ingredient used widely in the food, beverage, and pharmaceutical industries.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Green Chillies", price: "Enquire", image: "https://images.unsplash.com/photo-1576763595295-c0371a32af78?q=80&w=2070&auto=format&fit=crop", description: "Spicy and vibrant green chillies, harvested fresh to maintain their heat and color. These chillies are essential for adding flavor and spice to various international dishes. Packed under controlled conditions to preserve their crispness and pungency.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Red Chillies (Fresh)", price: "Enquire", image: "https://images.unsplash.com/photo-1722782034797-d1dc4157026e?q=80&w=710&auto=format&fit=crop", description: "Vibrant red chillies with a high heat index, perfect for making sauces, pastes, and seasonings. Our fresh red chillies are selected for their uniform color and intense flavor. We ensure proper ventilation in packaging to prevent moisture buildup.", subCategory: "🌶️ High-Demand Export Vegetables" },
      { name: "Fresh Tomatoes", price: "Enquire", image: tomatoesImg, description: "Firm and juicy tomatoes with a rich red color and balanced acidity. Sourced from high-tech polyhouse farms to ensure consistent quality and size. Ideal for retail markets, salad bars, and large-scale food processing units.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" },
      { name: "Potatoes", price: "Enquire", image: potatoesImg, description: "High-quality starchy potatoes with smooth skin and no blemishes. These potatoes are versatile for boiling, frying, or baking, making them a global kitchen staple. We provide various grades and varieties tailored to specific culinary uses.", subCategory: "🍅 Common Fresh Vegetables (Bulk Export)" }
    ],
    spices: [
      { name: "Black Pepper", price: "Enquire", image: "https://plus.unsplash.com/premium_photo-1726072357017-0af7b90a463d?q=80&w=1170&auto=format&fit=crop", description: "Premium quality bold black pepper known as 'Black Gold'. Sourced from the Malabar coast, it offers an intense aroma and spicy heat. Perfect for global food industries and retail seasoning markets." },
      { name: "Cardamom (Green)", price: "Enquire", image: "https://images.unsplash.com/photo-1701190589641-4f8f980c4b7a?q=80&w=1074&auto=format&fit=crop", description: "Highly aromatic green cardamom pods selected for their large size and vibrant color. These 'Queens of Spices' are sourced from the Western Ghats. Ideal for flavoring desserts, beverages, and luxury gourmet dishes." },
      { name: "Turmeric", price: "Enquire", image: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?w=600&auto=format&fit=crop", description: "Pure turmeric with high curcumin content, offering a vibrant yellow color and earthy flavor. Known for its extensive medicinal and culinary applications worldwide. We provide both whole finger and fine powder forms for export." },
      { name: "Cumin Seeds (Jeera)", price: "Enquire", image: "https://media.istockphoto.com/id/1482275464/photo/indian-spice-jeera-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=wyulj1D6Jco2WmGvfJsKCl0Cv5X3ZUVuK4GAdD4K-KY=", description: "High-aroma Indian cumin seeds with a warm, earthy flavor profile. These seeds are meticulously cleaned and sorted to ensure zero impurities. A fundamental spice in global cuisines, especially in Mediterranean and Asian cooking." },
      { name: "Coriander Seeds", price: "Enquire", image: "https://images.unsplash.com/photo-1608797178894-bf7c596932da?q=80&w=2070&auto=format&fit=crop", description: "Fresh and flavorful coriander seeds with a citrusy, nutty undertone. Our seeds are dried under controlled conditions to preserve their essential oils. Widely used as a base for spice blends and international culinary preparations." },
      { name: "Dry Red Chilli", price: "Enquire", image: chilliImg, description: "Premium Kashmiri and Byadgi red chillies known for their deep red color and mild heat. These chillies are perfect for adding rich color to food without overwhelming spice levels. Hand-selected and sun-dried for the best quality." },
      { name: "Ginger (Dry / Powder)", price: "Enquire", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400", description: "Premium dry ginger and fine powder with a sharp, pungent kick. Sourced from high-quality fresh ginger and processed under hygienic conditions. Widely used in herbal teas, spice mixes, and commercial food production." },
      { name: "Cloves (Laung)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Highly aromatic whole cloves with a sweet and spicy flavor profile. These hand-picked flower buds are rich in natural oils and medicinal properties. Perfect for flavoring meats, rice dishes, and pharmaceutical applications." },
      { name: "Cinnamon (Dalchini)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Natural cinnamon bark with a sweet, woody aroma and delicate flavor. Sourced from sustainable plantations to ensure the highest purity and quality. Essential for baking, flavoring beverages, and traditional medicinal preparations." },
      { name: "Fenugreek Seeds (Methi)", price: "Enquire", image: "https://images.unsplash.com/photo-1547050605-2f37a5075678?auto=format&fit=crop&q=80&w=400", description: "Nutritious fenugreek seeds with a slightly bitter, maple-like flavor. Known for their health benefits, including blood sugar management and digestive aid. Our seeds are cleaned and graded to meet international food safety standards." }
    ],
    pulses: [
      { name: "Kabuli Chana (Chickpeas)", price: "Enquire", image: "https://as1.ftcdn.net/v2/jpg/16/08/40/04/1000_F_1608400439_5ENJ2dZnEdAOGKztSPD6NF96F9Bay7kE.jpg", description: "Large export-grade Kabuli Chickpeas with a creamy texture and nutty flavor. These pulses are high in protein and fiber, making them a healthy dietary staple. Sorted and graded to ensure uniform size and high cooking quality." },
      { name: "Toor Dal (Pigeon Peas)", price: "Enquire", image: "https://media.istockphoto.com/id/1318405813/photo/macro-close-up-of-organic-arhar-dal-or-split-yellow-dal-in-an-earthen-clay-pot-on-the-self.webp?a=1&b=1&s=612x612&w=0&k=20&c=ggjIQ4tSntbJvasA1wf73akC8aMBQ3uRykTCNMhZiKA=", description: "Unpolished and graded split pigeon peas with a mild, earthy taste. A major source of protein in vegetarian diets, our pulses are processed without chemicals. Ideal for large-scale catering and retail distribution in international markets." },
      { name: "Masoor Dal (Red Lentils)", price: "Enquire", image: "https://images.unsplash.com/photo-1614373532201-c40b993f0013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFzb29yJTIwRGFsJTIwKFJlZCUyMExlbnRpbHMpfGVufDB8fDB8fHww", description: "Cleaned and sorted red lentils that cook quickly and offer a delicious, nutty flavor. These lentils are rich in essential nutrients and iron. Our sorting process ensures minimal impurities and consistent color for premium export." },
      { name: "Urad Dal", price: "Enquire", image: "https://media.istockphoto.com/id/1410558769/photo/heap-of-urad-dal-or-black-gram-seeds-close-up-shot-texture-background-of-black-gram-daal.jpg?s=612x612&w=0&k=20&c=4aUnAbbEF0XbTt3RVDkJYTFOB453pq6c0PxHNKH6YkY=", description: "High-protein black gram pulses, available in whole, split, and dehusked forms. Known for their creamy texture when cooked, making them a favorite for traditional Indian dishes. Processed under hygienic conditions to maintain natural goodness." },
      { name: "Moong Dal", price: "Enquire", image: "https://images.unsplash.com/photo-1702041357314-db5826c96f04?w=600&auto=format&fit=crop", description: "Fresh and nutritious green gram pulses, easy to digest and rich in plant-based proteins. These pulses are hand-selected to ensure the highest quality and purity. A versatile ingredient for soups, salads, and traditional savory dishes." },
      { name: "Rajma (Red Kidney Beans)", price: "Enquire", image: "https://tse4.mm.bing.net/th/id/OIP.7fdiRic2Sqg0ZfUX6nJrrAHaE8?pid=Api&P=0&h=180", description: "Premium quality red kidney beans with a firm texture and rich flavor. Sourced from high-altitude regions to ensure superior taste and nutritional value. Perfectly suited for canning, retail packaging, and restaurant supply chains." },
      { name: "Black Eyed Peas (Lobia)", price: "Enquire", image: "https://media.istockphoto.com/id/2166605365/photo/close-up-image-of-pile-of-dried-black-eyed-peas-in-white-china-bowl-healthy-food-distressed.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RO5oKBDqDPxjQRGZYwpJqOanavBYJrMkt44oOJ-x1U=", description: "Hand-sorted black-eyed peas with a smooth texture and delicate, nutty flavor. These pulses are a great source of minerals and dietary fiber. Our rigorous quality checks ensure they meet the highest global food standards." },
      { name: "White Peas", price: "Enquire", image: whitePeasImg, description: "High-quality dried white peas, perfect for snacks, stews, and traditional savory preparations. These peas are harvested at full maturity and dried naturally to preserve flavor. A cost-effective and nutritious pulse for international food markets." },
      { name: "Green Peas (Dried)", price: "Enquire", image: "https://images.unsplash.com/photo-1693667660388-7cccf194fc06?w=600&auto=format&fit=cro", description: "Premium dried green peas with a vibrant color and sweet, earthy taste. Rich in fiber and essential vitamins, these peas are a popular ingredient in diverse cuisines. We ensure uniform drying and moisture control for long shelf life." },
      { name: "Horse Gram (Kulthi Dal)", price: "Enquire", image: "https://media.istockphoto.com/id/2220502274/photo/horse-gram-in-white-spoon-isolated-in-white-background-kulthi-dal-or-horse-gram-is-widely.webp?a=1&b=1&s=612x612&w=0&k=20&c=cJBCRRzPzuiFdTw6rXVi6O-3cI7BLdTsGD4q2ZW7Nmg=", description: "Nutritious horse gram known for its high iron and protein content. Traditionally used in Ayurvedic treatments and healthy soups. Our horse gram is cleaned and graded to remove stones and impurities, ensuring premium export quality." }
    ],
    millets: [
      { name: "Pearl Millet (Bajra)", price: "Enquire", image: "https://media.istockphoto.com/id/1400438871/photo/pear-millet-background.jpg?s=2048x2048&w=is&k=20&c=-3I-jWFRFx1nLRn_5RqXwJ673HGn-UeNgIqG1k1C1PI=", description: "Pearl millet, also known as Bajra, is a highly nutritious grain rich in minerals and protein. These hardy grains are sourced from traditional Indian farms and are gluten-free by nature. Perfect for health-conscious consumers and traditional food production." },
      { name: "Finger Millet (Ragi)", price: "Enquire", image: "https://media.istockphoto.com/id/1317287403/photo/eleusine-coracana-grain-or-finger-millet-also-known-as-ragi-in-india-kodo-in-nepal.jpg?s=612x612&w=0&k=20&c=-uq7ymUgkwTkdMDgpgDTam9yFVA4iQB1RFfLE-K-YTY=", description: "Finger millet or Ragi is a superfood known for its high calcium and fiber content. It is a staple grain for nutrition-dense meals and infant foods. Our Ragi is thoroughly cleaned and processed to maintain its natural nutritional integrity for export." },
      { name: "Foxtail Millet", price: "Enquire", image: "https://media.istockphoto.com/id/1445727438/photo/millet-and-wood-spoon.jpg?s=612x612&w=0&k=20&c=hEU1OdXqQOestTtUF4AE5RZWtnNXjEym81vJVN5yk14=", description: "Healthy foxtail millet characterized by its fine texture and high energy-giving properties. Rich in antioxidants and essential vitamins, it is an excellent alternative to conventional grains like rice. We offer premium quality foxtail millet for global retail and wholesale." },
      { name: "Barnyard Millet", price: "Enquire", image: "https://media.istockphoto.com/id/1320285908/photo/unhulled-barnyard-millet-seeds-in-bowl-cutout.jpg?s=612x612&w=0&k=20&c=0DIsi3JtARn56r3IfEvrkxquZwJUGqPEr5hgvviX14Y=", description: "Premium barnyard millet, a low-glycemic index grain that is perfect for health-conscious diets. It is easy to digest and rich in dietary fiber and essential minerals. Sourced from the best growing regions, our barnyard millet meets strict international safety standards." },
      { name: "Kodo Millet", price: "Enquire", image: "https://media.istockphoto.com/id/1749822176/photo/closeup-of-kodo-millet-a-healthy-grain-in-a-glass-bowl-filled-to-the-brim.jpg?s=612x612&w=0&k=20&c=NOqTJxbcKaayacZGn4AIMpnCQMmArr00hpgzudJb4pU=", description: "Nutritious kodo millet known for its robust flavor and high resistance to pests during storage. A traditional grain that is gaining global popularity for its incredible health benefits. We provide well-polished and cleaned kodo millet for export markets." },
      { name: "Little Millet", price: "Enquire", image: "https://media.istockphoto.com/id/1057114124/photo/close-up-of-millet-heap-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YAt0UuiG2gRAvHOFUbDMK5c5EnOj9-t8jS-0maTZ4zs=", description: "High-fiber little millet with small, pale grains that offer a nutty flavor when cooked. It is a rich source of complex carbohydrates and essential micronutrients. Ideal for those looking for gluten-free and healthy grain alternatives in their daily diet." },
      { name: "Gahu (Wheat Millets)", price: "Enquire", image: "https://media.istockphoto.com/id/171553200/photo/wheat-berries-background.jpg?s=612x612&w=0&k=20&c=907B7IcP8MieoXvLzLILSqy05gTjehDBcSb-R2Wzmj4=", description: "Premium quality wheat millets processed to retain maximum nutrition and texture. These grains combine the benefits of traditional wheat with the hardy characteristics of millets. A versatile grain suitable for various culinary applications in international kitchens." }
    ],
    rices: [
      { name: "1121 Basmati Rice", price: "Enquire", image: "https://plus.unsplash.com/premium_photo-1723925093264-40b6b957c44d?w=600&auto=format&fit=crop", description: "Extra-long grain aromatic 1121 Basmati rice, world-famous for its distinct fragrance and non-sticky texture after cooking. Aged perfectly to enhance its natural aroma and length. A premium choice for luxury restaurants and high-end retail markets globally." },
      { name: "Sona Masoori Rice", price: "Enquire", image: "https://plus.unsplash.com/premium_photo-1674654419403-1a80edb26881?w=600&auto=format&fit=crop", description: "Premium non-basmati Sona Masoori rice, lightweight and aromatic, popular in South Indian and global cuisines. Known for its high quality and excellent digestive properties. Our rice is carefully milled to maintain its natural flavor and high nutritional value." },
      { name: "Long Grain Parboiled Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1613045935265-265ff612e0e2?w=600&auto=format&fit=crop", description: "High-quality parboiled rice that undergoes a specialized steaming process to retain essential vitamins and minerals. Offers a firm texture and separate grains when cooked, making it ideal for institutional catering and large-scale food services across the world." },
      { name: "IR64 Raw Rice", price: "Enquire", image: ir64RawRiceImg, description: "Standard export quality IR64 long-grain raw rice, widely consumed for its versatility and cost-effectiveness. This variety is popular in African and Southeast Asian markets due to its great taste and affordability. Processed with modern milling technology for maximum purity." },
      { name: "Matta Rice", price: "Enquire", image: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWF0dGElMjBSaWNlfGVufDB8fDB8fHww", description: "Traditional red Matta rice from South India, known for its unique earthy flavor and high nutritional content. Rich in fiber and essential minerals, it is a healthy choice for daily consumption. Our Matta rice is parboiled to preserve its distinct color and taste." },
      { name: "Black Rice", price: "Enquire", image: "https://plus.unsplash.com/premium_photo-1726877060096-882c2ac6d13c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjBSaWNlfGVufDB8fDB8fHww", description: "Nutritious premium black rice, also known as 'Forbidden Rice,' prized for its high anthocyanin content and antioxidant properties. Offers a slightly nutty flavor and a striking appearance when served. A gourmet choice for health-conscious consumers and fine dining." }
    ],
    bamboo: [
      { name: "Bamboo Flower Vases", price: "Enquire", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=400", description: "Elegant bamboo flower vases handcrafted by skilled artisans to add a touch of natural beauty to any interior. Sustainable and eco-friendly, these vases are both durable and aesthetically pleasing. Perfect for modern home décor and eco-conscious gift markets.", subCategory: "🏺 Home Décor Items" },
      { name: "Bamboo Storage Bins", price: "Enquire", image: "https://images.unsplash.com/photo-1519643225200-94e79e383724?auto=format&fit=crop&q=80&w=400", description: "Sustainable storage solutions made from premium bamboo fibers. These storage bins are lightweight, sturdy, and perfect for organizing household or office items. A stylish and environmentally responsible alternative to plastic storage containers.", subCategory: "🧺 Storage & Utility Products" }
    ],
    textiles: [
      { name: "Pure Silk Saree", price: "Enquire", image: "https://media.istockphoto.com/id/2237077809/photo/handcrafted-paithani-sarees-featuring-traditional-motifs-like-peacocks-and-lotus-made-from.jpg?s=2048x2048&w=is&k=20&c=9lzlVdP2suHoVIySHG85QQFsihx7eSz8P7y1qR5Qd8s=", description: "Hand-loomed Banarasi silk saree featuring exquisite patterns and a luxurious texture. These sarees represent the pinnacle of Indian textile craftsmanship and elegance. Perfect for high-end fashion boutiques and traditional wedding wear collections worldwide." },
      { name: "Organic Cotton Fabric", price: "Enquire", image: "https://media.istockphoto.com/id/1345934516/photo/natural-organic-cotton-t-shirts-and-cotton-plant-flowers-on-white-table-eco-clothes-fashion.jpg?s=612x612&w=0&k=20&c=EMLo2G_aBcJ9g2rVPinW01iNnscqgyD_wWz4-SnlR8A=", description: "Eco-friendly organic cotton fabric woven from the finest sustainable cotton fibers. Known for its softness, breathability, and skin-friendly properties. Ideal for manufacturing high-quality apparel, baby clothes, and sustainable fashion lines for global export." },
      { name: "Handcrafted Jute Bags", price: "Enquire", image: "https://images.unsplash.com/photo-1684097707041-b22220c91181?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Sustainable and stylish handcrafted jute bags made from natural biodegradable fibers. These bags are durable, eco-friendly, and perfect for retail shopping or promotional giveaways. A popular choice in markets looking for plastic-free alternatives." },
      { name: "Embroidered Textiles", price: "Enquire", image: "https://plus.unsplash.com/premium_photo-1677355760744-7bb41effe07d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW1icm9pZGVyZWQlMjBUZXh0aWxlc3xlbnwwfHwwfHx8MA%3D%3D", description: "Exquisite traditional embroidery on premium fabrics, showcasing intricate designs and vibrant colors. Our embroidered textiles are perfect for home furnishings, high-fashion garments, and artisanal accessories. Sourced from regions famous for their heritage craft." },
      { name: "Linen Home Furnishings", price: "Enquire", image: "https://media.istockphoto.com/id/1094148730/photo/stack-of-folded-towels-empty-copy-space.jpg?s=612x612&w=0&k=20&c=XAsbDzGeHPe58DXDEJrnLVlS3Vnb-Hd-QVkT0697sVY=", description: "Premium linen home textiles including bedsheets, cushion covers, and curtains. Known for their durability, natural cool feel, and elegant aesthetic. These furnishings add a touch of sophisticated comfort to modern living spaces and luxury hotel suites." },
      { name: "Printed Cotton Kurtis", price: "Enquire", image: "https://media.istockphoto.com/id/1034373292/photo/selection-of-colorful-fabrics.jpg?s=612x612&w=0&k=20&c=BFCoo4dBwFDq4nADGsi5XMNOBsDSdlIjzam5jThU1Yw=", description: "Fashionable printed cotton kurtis featuring modern ethnic designs and vibrant color palettes. Made from high-quality cotton to ensure comfort throughout the day. A popular choice in the global modest fashion market and casual ethnic wear segments." }
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
