import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import OfferSection from "@/components/shared/pageSection/homePageSection/OfferSection";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/sideImage/herobg.png')", // Ensure the path is correct
      }}
      className="pt-44 bg-cover bg-no-repeat bg-center h-auto w-full bg-white"
    >
      <HeroSection />
      <OfferSection />
    </div>
  );
}
