import Home from "./home";
import Image from 'next/image'
import Background from '../assets/background.jpg'
import Header from "@/components/header";


export default function IndexPage() {
  return (
    <section className="w-full min-h-screen" style={{ 
      backgroundImage: `url(${Background.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Header />
      <Home />
    </section>
  );
}
