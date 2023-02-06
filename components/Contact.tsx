import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Contact(props: {
  text: string;
  text2: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
    margin: "0px 100px -50px 0px",
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen text-white select-none">
        <a
          href="https://www.instagram.com/amoralskateboards/"
          target="_blank"
          rel="noreferrer"
          className="w-[50%] md:w-[20%]"
        >
          <Image alt="intagram page" width={250} height={250} src={"/img/qr.webp"} />
        </a>
        <div
          ref={ref}
          className="flex flex-col justify-center items-center m-5"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-[Custom-1] text-xl md:text-5xl text-amber-500 text-center"
          >
            {props.text}
          </motion.span>
          <span className="flex gap-2 font-[Custom-2] font-extrabold text-white">
            {props.text2}
          </span>
        </div>
      </div>
    </>
  );
}
