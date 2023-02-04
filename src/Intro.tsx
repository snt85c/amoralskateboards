import AMORAL_logo from "./img/AMORAL_logo.webp";
import Navbar from "./Navbar";

export default function Intro() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="absolute top-0 right-0">
          <Navbar />
        </div>
        <img className=" w-[100%] md:w-[60%]" src={AMORAL_logo} />
      </div>
    </>
  );
}
