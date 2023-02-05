import skull from "./img/skull.webp";
import skullsmoke from "./img/skullsmoke.webp";
import fish from "./img/fish.webp";
import board1 from "./img/board1.webp";
import board2 from "./img/board2.webp";
import board3 from "./img/board3.webp";

import skate1 from "./img/skateboard/skate1.jpg";
import skate2 from "./img/skateboard/skate2.jpg";
import skate3 from "./img/skateboard/skate3.jpg";
import skate4 from "./img/skateboard/skate4.jpg";
import skate5 from "./img/skateboard/skate5.jpg";
import skate6 from "./img/skateboard/skate6.jpg";

export const shop: iShop[] = [
  {
    img: skate1,
    descr: `"POPSICLE 8,25"x 31,5" wb 14" 7ply Low/mid concave"`,
  },
  {
    img: skate2,
    descr: `"POPSICLE 8,125"x 31,5" wb 14" 7ply Low/Mid concave"`,
  },
  {
    img: skate3,
    descr: `POPSICLE 8,5"x 32" wb 14,3" 7ply 
  `,
  },
  { img: skate4, descr: `POPSICLE MOD 8,5"x 31,5" wb 14"/14,3"` },
  { img: skate5, descr: `OLD SKULL II 9"x 32" wb14" 7ply ` },
  {
    img: skate6,
    descr: `POPSICLE 8,25"x 31,5" wb 14" 7ply 
  `,
  },
];

interface iShop {
  img: string;
  descr: string;
}

export interface iPageData {
  isOverrideAnimation?: boolean;
  textContent: string;
  textContent2: string;
  img?: string;
  img2?: string;
}

export const pageData: iPageData[] = [
  {
    isOverrideAnimation: false,
    textContent: "Custom",
    textContent2:
      "Stand out from the crowd with a one-of-a-kind custom skateboard. Choose your own graphics, shapes, and sizes for a truly unique ride",
    img: skullsmoke,
    img2: board1,
  },
  {
    isOverrideAnimation: false,
    textContent: "Strong",
    textContent2:
      "Express your personality through your skateboard. With custom designs, you can show off your style and creativity on and off the board.",
    img: skull,
    img2: board2,
  },
  {
    isOverrideAnimation: false,
    textContent: "Stylish",
    textContent2:
      "Don't settle for a generic skateboard.  \n Upgrade to a custom board for better performance and unbeatable style. Impress your friends and shred in style",
    img: fish,
    img2: board3,
  },
];
