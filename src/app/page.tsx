import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import OfferSection from "@/components/shared/pageSection/homePageSection/OfferSection";
import ServicesSection from "@/components/shared/pageSection/homePageSection/ServicesSectionTop";
import ServiceSectionMain from "@/components/shared/pageSection/homePageSection/ServiceSectionMain";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <OfferSection />
      <ServicesSection />
      <ServiceSectionMain/>
    </div>
  );
}

// style={{
//   backgroundImage: "url('/images/sideImage/herobg.png')",
// }}
// className="pt-44 bg-center h-auto bg-cover block align-middle bg-no-repeat w-full bg-white"
