import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex justify-between px-3 py-1">
      <span className="text-white font-[Custom-1] text-[0.5rem]">SNT {new Date().getFullYear()}</span>
      <a href="https://github.com/snt85c" target="_blank" rel="noreferrer">
        <FaGithub color="white" size={15} />
      </a>
    </div>
  );
}
