import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { iPageData } from "./interface";
export default function Page(props: {
  data: iPageData;
  direction: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  console.log(isInView);
  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center min-h-screen text-white sm:text-6xl md:text-9xl bg-black"
      initial={{
        x: props.direction === "right" ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <div>{props.data.textContent}</div>
      <img
        className={`absolute md:flex w-[60%] md:w-[50%] bottom-[1%] md:bottom-auto`}
        src={props.data.img}
        style={{
          [props.direction]: "-15vw",
        }}
      ></img>
    </motion.div>
  );
}
