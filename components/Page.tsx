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
    // once: true,
    margin: "0px 100px -50px 0px",
  });

  const { index, data, direction } = props;

  return (
    <motion.div
      layout
      ref={ref}
      className={`h-[75vh] md:min-h-screen flex odd:md:flex-row-reverse text-white bg-black `}
      initial={{
        x: direction === "right" ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <Image
        priority={true}
        height={500}
        width={500}
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        placeholder="blur"
        blurDataURL={data.img2}
        className="md:w-[50vw] h-[75vh] md:min-h-full object-cover"
        src={data.img2}
        alt={data.textContent}
      />
      <motion.div
        layout
        initial={{
          x: direction === "right" ? "-100%" : "100%",
          opacity: 0,
        }}
        animate={isInView ? { x: "0", opacity: 1 } : {}}
        transition={{ type: "tween", duration: 1.5 }}
      />
      <Image
        className={`absolute pt-20 md:pt-0 md:h-screen md:relative object-contain w-1/2 ${
          index % 2 === 0 ? "right-0" : "left-0"
        }`}
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        priority={true}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={data.img}
        src={data.img}
        alt=""
      />
      <motion.div
        layout
        initial={{
          x: direction === "right" ? "-100%" : "110%",
          opacity: 0,
        }}
        animate={isInView ? { x: "0", opacity: 1 } : {}}
        transition={{ type: "tween", duration: 1.5 }}
        className={`absolute pt-12 wmd:pt-0 flex flex-col justify-center items-center min-h-[75vh] md:min-h-screen w-full
         ${index % 2 === 0 ? "left-0" : "right-0"} 
        `}
      >
        <div className="w-full text-center  text-amber-500 font-[Custom-1] text-[5rem] md:text-[8rem]">
          {data.textContent.toUpperCase()}
        </div>
        <div className="text-sm text-center md:text-xl p-3 md:py-9 w-1/2 bg-gray-800 rounded-xl font-[Custom-2] shadow-xl shadow-black">
          {data.textContent2}
        </div>
      </motion.div>
    </motion.div>
  );
}
