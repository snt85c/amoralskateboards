import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex justify-between px-3 py-1 text-xs">
      <span className="text-white">SNT {new Date().getFullYear()}</span>
      <a href="https://github.com/snt85c" target="_blank">
        <FaGithub color="white" size={15} />
      </a>
    </div>
  );
}
