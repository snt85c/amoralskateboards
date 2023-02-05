import Navbar from "./Navbar";
import { motion } from "framer-motion";
import video1 from "./img/intromobile.webm";
import video2 from "./img/introdesktop.webm";

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
      </motion.div>
    </>
  );
}
