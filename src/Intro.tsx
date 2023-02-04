import AMORAL_logo from "./img/AMORAL_logo.webp";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  return (
    <>
      <motion.div
        ref={ref}
        layout
        className="flex justify-center items-center min-h-screen text-white"
        initial={{
          opacity: 0,
        }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0">
          <Navbar />
        </div>
        <img className=" w-[100%] md:w-[60%]" src={AMORAL_logo} />
      </motion.div>
    </>
  );
}
