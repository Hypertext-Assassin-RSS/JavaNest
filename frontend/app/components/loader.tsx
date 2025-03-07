import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md">
        <div>
            <DotLottieReact
                src="https://lottie.host/29622401-58dd-4a9a-8096-e28007e794a6/HrqtuCl6qN.lottie"
                loop
                autoplay
                />
        </div>
      </div>
    );
  }
  