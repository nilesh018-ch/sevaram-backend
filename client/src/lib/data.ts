import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';

export const products = {
  categories: [
    { id: "foods", label: "Foods & Vegetables", icon: "Apple" },
    { id: "handicrafts", label: "Handicrafts", icon: "Palette" },
    { id: "machinery", label: "Machinery", icon: "Settings" },
    { id: "textiles", label: "Textiles", icon: "Shirt" }
  ],
  services: [
    {
      title: "CHA Services",
      description: "Smooth customs clearance with expert CHA (Custom House Agent) services.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/18054.jpg"
    },
    {
      title: "Logistics",
      description: "Efficient and reliable logistics, delivering your goods on time, every time.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16615.jpg"
    },
    {
      title: "Documentation",
      description: "Accurate and hassle-free documentation for seamless trade transactions.",
      image: "https://busyexim.com/wp-content/uploads/2024/09/16051.jpg"
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
  ]
};
