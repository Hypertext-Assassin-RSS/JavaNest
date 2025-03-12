"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import Header from "./components/header";
import About from "./pages/about";
import Products from "./pages/coffeeMenu";
import AboutUs from "./pages/aboutUs";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <AboutUs />
      <Products />
    </>
  );
}
