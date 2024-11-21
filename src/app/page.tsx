"use client"
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import OfferSection from "@/components/shared/pageSection/homePageSection/OfferSection";
import ServicesSection from "@/components/shared/pageSection/homePageSection/ServicesSectionTop";
import ServiceSectionMain from "@/components/shared/pageSection/homePageSection/ServiceSectionMain";
import FeaturedSection from "@/components/shared/pageSection/homePageSection/FeaturedSection";
import TechnologySection from "@/components/shared/pageSection/homePageSection/TechnologySection";
import ClientSection from "@/components/shared/pageSection/homePageSection/ClientSection";
import ContactUs from "@/components/shared/pageSection/homePageSection/ContactUs";
import { IMAGES } from "../../public/images";
import { useMyContext } from "@/contexts/MyContexts";

export default function Home() {
  const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light" ? "bg-white" : "bg-black" } overflow-hidden`}>
      <HeroSection
        img={IMAGES.HEROMAIN}
        imgH={450}
        imgW={460}
        imgSpin={true}
        heading="
            We Build, You Grow, Blockchain Flow"
        headingFont={64}
        paragraph=" We're at the forefront of blockchain technology. As a dedicated
            blockchain development company, we specialize in crafting secure,
            decentralized solutions that drive digital transformation. Our
            mission is to empower businesses with innovative, tailor-made
            blockchain solutions, delivering expertise, security, and
            transparency. With a team of seasoned experts, we help our clients
            embrace the future with blockchain technology. Join us in reshaping
            industries and building trust in a decentralized world."
            bgImg={IMAGES.BGHERO}
      />
      <OfferSection />
      <ServicesSection />
      <ServiceSectionMain />
      <FeaturedSection />
      <TechnologySection />
      <ClientSection />
      <ContactUs />
    </div>
  );
}

// style={{
//   backgroundImage: "url('/images/sideImage/herobg.png')",
// }}
// className="pt-44 bg-center h-auto bg-cover block align-middle bg-no-repeat w-full bg-white"
