import qr from "../img/qr.webp"
export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-white sm:text-6xl md:text-9xl">
        <img className=" w-[50%] md:w-[20%]"src={qr} />
      </div>
    </>
  );
}
