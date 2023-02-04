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
    textContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img:skullsmoke,
    img2:board1
  },{
    isOverrideAnimation: false,
    textContent: "Resistant",
    textContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img:skull,
    img2:board2
    
  },{
    isOverrideAnimation: false,
    textContent: "Stylish",
    textContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img:fish,
    img2:board3
  }
];
