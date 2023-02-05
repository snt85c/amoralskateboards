import { iPageData } from "./interface";
import skull from "./img/skull.webp"
import skullsmoke from "./img/skullsmoke.webp"
import fish from "./img/fish.webp"
import board1 from "./img/board1.jpg"
import board2 from "./img/board2.jpg"
import board3 from "./img/board3.jpg"

export const pageData: iPageData[] = [
  {
    isOverrideAnimation: false,
    textContent: "Custom",
    textContent2: "Stand out from the crowd with a one-of-a-kind custom skateboard. Choose your own graphics, shapes, and sizes for a truly unique ride",
    img:skullsmoke,
    img2:board1
  },{
    isOverrideAnimation: false,
    textContent: "Strong",
    textContent2: "Express your personality through your skateboard. With custom designs, you can show off your style and creativity on and off the board.",
    img:skull,
    img2:board2
    
  },{
    isOverrideAnimation: false,
    textContent: "Stylish",
    textContent2: "Don't settle for a generic skateboard. Upgrade to a custom board for better performance and unbeatable style. Impress your friends and shred in style",
    img:fish,
    img2:board3
  }
];
