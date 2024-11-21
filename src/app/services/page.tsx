"use client"
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import { IMAGES } from "../../../public/images";
import OfferSection from "@/components/shared/pageSection/servicePageSection/OfferSection";
import FocusSection from "@/components/shared/pageSection/servicePageSection/FocusSection";
import ChooseSection from "@/components/shared/pageSection/servicePageSection/ChooseSection";
import ReadyToBuild from "@/components/shared/pageSection/servicePageSection/ReadyToBuild";
import { useMyContext } from "@/contexts/MyContexts";

export default function page() {
  const {theme} = useMyContext();
  return (
    <div className={` ${ theme === "light" ? "bg-white" : "bg-black" } `}>
      <HeroSection
        img={IMAGES.SERHERO}
        imgH={350}
        imgW={400}
        imgSpin={false}
        heading="Secure, Efficient, and
         Transparent: Crafting Smart
         Contracts for Success"
        headingFont={40}
        paragraph="Discover the game-changing potential of smart contracts across
        industries. With our expert smart contract development services,
        businesses in any sector can experience a new era of efficiency,
        security, and trust."
        bgImg={IMAGES.SERBG}
      />
      <OfferSection />
      <FocusSection />
      <ChooseSection />
      <ReadyToBuild/>
    </div>
  );
}
