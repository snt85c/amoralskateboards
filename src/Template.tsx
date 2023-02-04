import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Template(props: { direction: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
    margin: "0px 100px -50px 0px",
  });
  console.log(isInView);
  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center min-h-screen text-white text-9xl bg-black border border-white"
      initial={{
        x: props.direction === "right" ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.8 }}
    >
      test
    </motion.div>
  );
}
