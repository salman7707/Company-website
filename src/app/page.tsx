import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import OfferSection from "@/components/shared/pageSection/homePageSection/OfferSection";
import ServicesSection from "@/components/shared/pageSection/homePageSection/ServicesSectionTop";
import ServiceSectionMain from "@/components/shared/pageSection/homePageSection/ServiceSectionMain";
import FeaturedSection from "@/components/shared/pageSection/homePageSection/FeaturedSection";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <OfferSection />
      <ServicesSection />
      <ServiceSectionMain/>
      <FeaturedSection/>
    </div>
  );
}

// style={{
//   backgroundImage: "url('/images/sideImage/herobg.png')",
// }}
// className="pt-44 bg-center h-auto bg-cover block align-middle bg-no-repeat w-full bg-white"
