import qr from "./img/qr.webp";
export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-white sm:text-6xl md:text-9xl">
        <a
          href="https://www.instagram.com/amoralskateboards/"
          target="_blank"
          className="w-[50%] md:w-[20%]"
        >
          <img alt="intagram page" src={qr} />
        </a>
      </div>
    </>
  );
}
