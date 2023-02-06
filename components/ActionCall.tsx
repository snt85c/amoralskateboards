import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function ActionCall() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center min-h-[30vh] md:min-h-[50vh] mx-5 select-none"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="font-[Custom-1] text-xl md:text-5xl text-amber-500 text-center"
      >
        HANDCRAFTED BOARDS FROM ITALY 🇮🇹
      </motion.span>
      <span className="flex font-[Custom-2] font-extrabold md:text-xl text-white p-2">
      made with passion
      </span>
    </div>
  );
}
