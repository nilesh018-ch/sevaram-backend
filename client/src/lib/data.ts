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
      title: "CHA Services",
      description: "Smooth customs clearance with expert CHA (Custom House Agent) services.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/18054.jpg",
      link: "#"
    },
    {
      title: "Logistics",
      description: "Efficient and reliable logistics, delivering your goods on time, every time.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg",
      link: "#"
    },
    {
      title: "Documentation",
      description: "Accurate and hassle-free documentation for seamless trade transactions.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16051.jpg",
      link: "#"
    },
    {
      title: "Sourcing India",
      description: "Discover the best of Indian craftsmanship, sourced directly for your business.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/untitled-24-66f60f9a5977a.webp",
      link: "#"
    },
    {
      title: "Sourcing Abroad",
      description: "Expand your horizons with global sourcing solutions tailored to your needs.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2150769942.jpg",
      link: "#"
    },
    {
      title: "Export Education",
      description: "Master the art of global trade with our expert-led courses.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/2149178634.jpg",
      link: "#"
    }
  ],
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
  items: [
    {
      id: "1",
      category: "foods",
      name: "Premium Turmeric",
      image: turmericImg,
      price: "Enquire"
    },
    {
      id: "2",
      category: "foods",
      name: "Kashmiri Chilli",
      image: chilliImg,
      price: "Enquire"
    },
    {
      id: "3",
      category: "textiles",
      name: "Cotton Yarn",
      image: varietyHero,
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
