"use client";

import { Header } from "@/app/components/header";
import { Welcome } from "@/app/pages/welcome";
import { CoffeeMenu } from "@/app/pages/coffeeMenu";
import { About } from "@/app/pages/about";



export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <CoffeeMenu />
      <About />
    </>
  );
}
