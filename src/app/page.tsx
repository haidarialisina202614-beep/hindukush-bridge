import HeroPage from "./components/Hero";
import Image from 'next/image'
import { Check } from "lucide-react";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";
import Application from "./components/Application";

export default function HomePage() {
  return (
    <div>
      <main>
        <HeroPage />
        <Sponsors />
        <Application />
        <Packages />
        <Services />
        <Faq />
      </main>
    </div>
  )
}