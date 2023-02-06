
export interface iShop {
  img: string;
  descr: string;
}

export interface iPageData {
  textContent: string;
  textContent2: string;
  img?: string;
  img2?: string;
}

export const shop: iShop[] = [
  {
    img: "/../public/img/skateboard/skate1.jpg",
    descr: `"POPSICLE 8,25"x 31,5" wb 14" 7ply Low/mid concave"`,
  },
  {
    img: "/../public/img/skateboard/skate2.jpg",
    descr: `"POPSICLE 8,125"x 31,5" wb 14" 7ply Low/Mid concave"`,
  },
  {
    img: "/../public/img/skateboard/skate3.jpg",
    descr: `POPSICLE 8,5"x 32" wb 14,3" 7ply 
  `,
  },
  {
    img: "/../public/img/skateboard/skate4.jpg",
    descr: `POPSICLE MOD 8,5"x 31,5" wb 14"/14,3"`,
  },
  {
    img: "/../public/img/skateboard/skate5.jpg",
    descr: `OLD SKULL II 9"x 32" wb14" 7ply `,
  },
  {
    img: "/../public/img/skateboard/skate6.jpg",
    descr: `POPSICLE 8,25"x 31,5" wb 14" 7ply 
  `,
  },
];

export const pageData: iPageData[] = [
  {
    textContent: "Custom",
    textContent2:
      "Stand out from the crowd with a one-of-a-kind custom skateboard. Choose your own graphics, shapes, and sizes for a truly unique ride",
    img: "/../public/img/skullsmoke.webp",
    img2: "/../public/img/board1.webp"
  },
  {
    textContent: "Strong",
    textContent2:
      "Express your personality through your skateboard. With custom designs, you can show off your style and creativity on and off the board.",
    img: "/../public/img/skull.webp",
    img2: "/../public/img/board2.webp",
  },
  {
    textContent: "Stylish",
    textContent2:
      "Don't settle for a generic skateboard.  \n Upgrade to a custom board for better performance and unbeatable style. Impress your friends and shred in style",
    img: "/../public/img/fish.webp",
    img2: "/../public/img/board3.webp",
  },
];
