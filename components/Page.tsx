import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { iPageData } from "./pageData";
export default function Page(props: {
  index: number;
  data: iPageData;
  direction: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  return (
    <motion.div
      ref={ref}
      className={`min-h-screen flex flex-col md:flex-row odd:md:flex-row-reverse text-white bg-black my-2 `}
      initial={{
        x: props.direction === "right" ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <Image
        height={500}
        width={500}
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        priority
        placeholder="blur"
        blurDataURL={props.data.img}
        className="md:w-1/2 object-contain"
        src={props.data.img2}
        alt={props.data.textContent}
      />
      <div
        className={` flex ${
          props.index % 2 === 0 ? "flex-row-reverse" : "flex-row"
        }  md:w-1/2`}
      >
        <motion.div
          initial={{
            x: props.direction === "right" ? "100%" : "-100%",
            opacity: 0,
          }}
          animate={isInView ? { x: "0", opacity: 1 } : {}}
          transition={{ type: "tween", duration: 1.5 }}
        />
        <Image
          className="object-contain w-1/2 md:w-full mt-5"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          width={500}
          height={500}
          priority
          placeholder="blur"
          blurDataURL={props.data.img}
          src={props.data.img}
          alt=""
        />
        <motion.div
          initial={{
            x: props.direction === "right" ? "-100%" : "100%",
            opacity: 0,
          }}
          animate={isInView ? { x: "0", opacity: 1 } : {}}
          transition={{ type: "tween", duration: 1.5 }}
          className={`absolute w-1/2 flex-col md:top-[25vh] flex text-[10vw] select-none p-5 pb-0 ${
            props.index % 2 === 0 ? "left-0" : "right-0"
          } `}
        >
          <div className="md:w-1/2 text-amber-500 font-[Custom-1]">
            {props.data.textContent.toUpperCase()}
          </div>
          <div className="text-sm md:text-xl p-3 md:py-9 md:w-1/2 bg-gray-800 rounded-xl font-[Custom-2] shadow-xl shadow-black">
            {props.data.textContent2}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
