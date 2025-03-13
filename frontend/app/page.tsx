"use client";

import { Header } from "./components/header";
import { About } from "./pages/about";
import { CoffeeMenu } from "./pages/coffeeMenu";
import { AboutUs } from "./pages/aboutUs";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <AboutUs />
      <CoffeeMenu />
    </>
  );
}
