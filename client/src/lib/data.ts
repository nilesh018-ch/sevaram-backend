import varietyHero from '@assets/stock_images/variety_of_colorful__0056cde6.jpg';
import turmericImg from '@assets/stock_images/turmeric_powder_in_w_899f649c.jpg';
import chilliImg from '@assets/stock_images/red_chilli_powder_in_bb2e7907.jpg';
import riceImg from '@assets/stock_images/basmati_rice_grains__e77a255e.jpg';
import pulsesImg from '@assets/stock_images/assorted_indian_lent_d7b9cc73.jpg';

export const products = {
  spices: [
    {
      id: "s1",
      name: "Premium Turmeric Powder",
      description: "High curcumin content turmeric sourced from Salem. Vibrant golden color and authentic aroma.",
      image: turmericImg,
    },
    {
      id: "s2",
      name: "Kashmiri Red Chilli",
      description: "Vibrant red color with moderate heat. Perfect for giving your dishes a rich look.",
      image: chilliImg,
    },
    {
      id: "s3",
      name: "Black Pepper Corns",
      description: "The King of Spices. Bold, pungent flavor directly from Kerala plantations.",
      image: varietyHero, // Fallback/Generic
    },
    {
      id: "s4",
      name: "Cumin Seeds (Jeera)",
      description: "Earthy and warm flavor profile. Essential for tempering and spice blends.",
      image: varietyHero, // Fallback/Generic
    }
  ],
  pulses: [
    {
      id: "p1",
      name: "Toor Dal",
      description: "Premium unpolished Toor Dal. High in protein and perfect for daily consumption.",
      image: pulsesImg,
    },
    {
      id: "p2",
      name: "Moong Dal",
      description: "Yellow split gram, easy to digest and sourced from the best farms.",
      image: pulsesImg,
    },
    {
      id: "p3",
      name: "Chana Dal",
      description: "Robust flavor and texture. Ideal for curries and traditional Indian snacks.",
      image: pulsesImg,
    },
    {
      id: "p4",
      name: "Urad Dal",
      description: "Whole and split varieties available. Key ingredient for idli and dosa batter.",
      image: pulsesImg,
    }
  ],
  rice: [
    {
      id: "r1",
      name: "Traditional Basmati Rice",
      description: "Extra long grain, aromatic rice aged to perfection for the best texture.",
      image: riceImg,
    },
    {
      id: "r2",
      name: "Sona Masoori",
      description: "Lightweight, medium-grain aromatic rice. A staple for South Indian meals.",
      image: riceImg,
    },
    {
      id: "r3",
      name: "Brown Rice",
      description: "Nutrient-rich unpolished rice. High fiber content for a healthy lifestyle.",
      image: riceImg,
    }
  ],
  millets: [
    {
      id: "m1",
      name: "Sorghum (Jowar)",
      description: "Gluten-free ancient grain. Rich in fiber and antioxidants.",
      image: varietyHero, // Fallback
    },
    {
      id: "m2",
      name: "Pearl Millet (Bajra)",
      description: "High energy grain, perfect for breads and porridges.",
      image: varietyHero, // Fallback
    },
    {
      id: "m3",
      name: "Finger Millet (Ragi)",
      description: "Calcium-rich superfood. Excellent for bone health and diabetic diets.",
      image: varietyHero, // Fallback
    },
    {
      id: "m4",
      name: "Foxtail Millet",
      description: "Versatile millet rich in Vitamin B12 and easy to cook.",
      image: varietyHero, // Fallback
    }
  ]
};
