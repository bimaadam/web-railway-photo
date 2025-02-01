import { DarkThemeToggle, Footer } from "flowbite-react";
import { Navigasi } from "../components/Navigasi"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Galeri";
import Testimoni from "@/components/Testimoni";
import { FAQ, CTA } from "@/components/FAQ";
import { Footer1 } from "@/components/Footer1";

export default function Home() {
  return (
    <>
      <Navigasi />
      <Hero />
      <About />
      <Gallery />
      <Testimoni />
      <FAQ />
      <CTA />
      <Footer1 />
    </>
  );
}
