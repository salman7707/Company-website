"use client";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
import { IMAGES } from "../../../../../public/images";

export default function FeaturedSection() {
  return (
    <div className="flex flex-col items-center justify-between py-20 w-full max-w-[1210px] mx-auto">
      <div className="flex px-4 flex-col items-center justify-center space-y-3">
        <Paragraph
          color="black"
          textAlign="text-center"
          fontSize="large"
          fontFamily="font-custom"
          weight="medium"
        >
          FEATURED CLIENTS
        </Paragraph>
        <HeadingLarge
          fontFamily="font-custom"
          color="black"
          fontSize="64"
          textAlign="text-center"
          smallScreenFont="36"
          weight="medium"
        >
          We partner with web3 companies
        </HeadingLarge>
        <Paragraph
          color="black"
          fontSize="extralarge"
          fontFamily="font-custom"
          weight="medium"
          textAlign="text-center"
        >
          Leading review and rating platforms say we are the top
          <br />
          development company. We don’t mind.
        </Paragraph>
      </div>
      {/* xl:w-[100%] xl:h-[100%] lg:w-[70%] lg:h-[70%] md:w-[50%] md:h-[50%]  */}
      <div className="whitespace-nowrap inline-block pt-20 overflow-hidden xl:w-[100%] md:w-[200%] xs:w-[350%]">
        <div className="scroll inline-block space-x-2">
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.ALPHA} alt="alpha" className="" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.SW} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.DEFI} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.SHARK} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.AZHA} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.BANNER} alt="alpha" />
          </div>
        </div>
        <div className="scroll inline-block  space-x-2">
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.ALPHA} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.SW} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.DEFI} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.SHARK} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.AZHA} alt="alpha" />
          </div>
          <div className="inline-block align-middle w-auto h-auto whitespace-nowrap">
            <img src={IMAGES.BANNER} alt="alpha" />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="inline-block scroll justify-between w-full items-center whitespace-nowrap ">
          <img src={IMAGES.ALPHA} alt="alpha" className="img" />
          <img src={IMAGES.SW} alt="alpha" className="img" />
          <img src={IMAGES.DEFI} alt="alpha" className="img" />
          <img src={IMAGES.SHARK} alt="alpha" className="img" />
          <img src={IMAGES.AZHA} alt="alpha" className="img" />
          <img src={IMAGES.BANNER} alt="alpha" className="img" />
        </div> */
}
{
  /* <div className="inline-block items-center justify-between whitespace-nowrap h-auto ">
          <Image src={IMAGES.ALPHA} alt="alpha" width={300} height={100} />
          <Image src={IMAGES.SW} alt="alpha" width={100} height={100} />
          <Image src={IMAGES.DEFI} alt="alpha" width={320} height={100} />
          <Image src={IMAGES.SHARK} alt="alpha" width={100} height={100} />
          <Image src={IMAGES.AZHA} alt="alpha" width={100} height={100} />
          <Image src={IMAGES.BANNER} alt="alpha" width={100} height={100} />
        </div> */
}
{
  /* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full">
              <Image src={IMAGES.ALPHA} alt="alpha" width={300} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Image src={IMAGES.AZHA} alt="azha" width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Image src={IMAGES.BANNER} alt="banner" width={100} height={100} />
            </div>
          </SwiperSlide>
        </Swiper> */
}
