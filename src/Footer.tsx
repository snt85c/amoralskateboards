import { FaGithub } from "react-icons/fa"
export default function Footer(){
    return (
        <div className="flex justify-between px-3 py-1 text-xs">
            <span className="text-white">SNT {new Date().getFullYear()}</span>
            <FaGithub color="white" size={10}/>
        </div>
    )
}