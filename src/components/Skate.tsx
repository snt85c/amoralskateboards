import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Skate(props: {
  skate: { img: string; descr: string };
  i: number;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px 0px 0px",
  });

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <>
      <motion.div
        ref={ref}
        onClick={() => {
          setIsClicked(true);
        }}
        initial={{
          x: props.i % 2 === 0 ? "100%" : "-100%",
          opacity: 0,
        }}
        animate={isInView ? { x: "0", opacity: 1 } : {}}
        transition={{ type: "tween", duration: 0.8 }}
        className="flex flex-col justify-evenly w-1/3 md:w-1/4 min-h-[20vh] md:min-h-[35vh] p-2 pb-0 m-2 bg-amber-500 rounded-xl"
      >
        <img
          className="object-fit rounded-xl shadow-lg shadow-black"
          src={props.skate.img}
          alt={props.skate.descr}
        />
        <div className="text-[Custom-2] p-2 pt-3 text-[0.6rem] text-black select-none">
          {props.skate.descr}
        </div>
      </motion.div>
      {isClicked && (
        <div
          ref={wrapperRef}
          className="absolute z-50 w-[90vw] md:w-[50vw] object-contain shadow-lg shadow-black bg-black p-1"
        >
          <img src={props.skate.img} alt={props.skate.descr} />
        </div>
      )}
    </>
  );
}
