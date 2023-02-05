import Navbar from "./Navbar";
import { motion } from "framer-motion";
import video1 from "./img/intromobile.webm";
import video2 from "./img/introdesktop.webm";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Intro(props: {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  return (
    <>
      <motion.div
        className=" text-white min-h-screen"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center">
          <Navbar />
          <video
            onLoadedData={() => {
              props.setIsLoaded(true);
            }}
            autoPlay
            muted
            className="md:hidden flex h-screen min-w-screen"
            src={video1}
          ></video>
          <video
            onLoadedData={() => {
              props.setIsLoaded(true);
            }}
            autoPlay
            muted
            className="hidden md:flex min-h-screen"
            src={video2}
          ></video>
        </div>
        <div className="absolute bottom-0 right-0 text-amber-500 animate-bounce">

        <FaAngleDoubleDown size={30}/>
        </div>
      </motion.div>
    </>
  );
}
