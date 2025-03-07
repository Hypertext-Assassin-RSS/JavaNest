import Image from "next/image";
import Anmation from '../assets/Loading-Animation.gif'



export default function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md">
        <Image src={Anmation} className="w-24" alt="loading animation"/>
      </div>
    );
  }
  