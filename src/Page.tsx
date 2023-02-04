import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { iPageData } from "./interface";
export default function Page(props: {
  index: number;
  data: iPageData;
  direction: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
    margin: "0px 100px -50px 0px",
  });
  return (
    <motion.div
      ref={ref}
      className={`min-h-screen flex flex-col md:flex-row odd:md:flex-row-reverse text-white bg-black `}
      initial={{
        x: props.direction === "right" ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <img className="md:w-1/2" src={props.data.img2} />
      <div
        className={` flex ${
          props.index % 2 == 0 ? "flex-row-reverse" : "flex-row"
        }  md:w-1/2`}
      >
        <motion.img
          className="object-contain w-1/2 md:w-full"
          initial={{
            x: props.direction === "right" ? "100%" : "-100%",
            opacity: 0,
          }}
          animate={isInView ? { x: "0", opacity: 1 } : {}}
          transition={{ type: "tween", duration: 1.5 }}
          src={props.data.img}
        />
        <motion.div
          initial={{
            x: props.direction === "right" ? "100%" : "-100%",
            opacity: 0,
          }}
          animate={isInView ? { x: "0", opacity: 1 } : {}}
          transition={{ type: "tween", duration: 2 }}
          className={`absolute w-1/2 flex-col md:top-[25vh] flex text-[10vw] select-none p-5 pb-0 ${
            props.index % 2 === 0 ? "left-0" : "right-0"
          } `}
        >
          <div className="md:w-1/2">{props.data.textContent}</div>
          <div className="text-sm md:w-1/2">{props.data.textContent2}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
