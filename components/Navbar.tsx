import { FaInstagram } from "react-icons/fa";
export default function Navbar() {
  return (
    <a
      className="absolute top-0 right-0 flex justify-between text-white p-2 text-xl font-extrabold"
      href="https://www.instagram.com/amoralskateboards/"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram size={25} />
    </a>
  );
}
