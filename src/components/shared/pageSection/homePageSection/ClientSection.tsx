"use client";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import HeaderMedium from "@/components/template/headings/HeaderMedium";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonial from "@/lib/TestimonialData";
import { useMyContext } from "@/contexts/MyContexts";
import TestimonialCard from "@/components/template/cards/TestimonialCard";

export default function ClientSection() {
  const { theme } = useMyContext();
  return (
    <div className="py-14 w-full max-w-[1210px] mx-auto">
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <HeaderMedium color="secondary" fontSize="20">
          OUR CLIENTS SAY
        </HeaderMedium>
        <HeaderLarge
          color={theme === "light" ? "black" : "white"}
          fontSize="40"
        >
          Feedback is breakfast for champions
        </HeaderLarge>
        <Paragraph
          color={theme === "light" ? "black" : "white"}
          textAlign="text-center"
          fontSize="large"
          fontFamily="font-manrope"
        >
          Being a part of 100+ challenging projects is inspiring for us.
          <br />
          Check out what our customers say about us.
        </Paragraph>
      </div>
      <div className="xl:w-[100%] lg:w-[95%] md:w-[90%] w-[85%] flex items-center justify-center mx-auto py-14">
        <Swiper
          spaceBetween={20}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper transition-all duration-1000 ease-in-out"
        >
          {Testimonial.map((data) => (
            <SwiperSlide key={data.id}>
              <div key={data.id}>
                <TestimonialCard
                  heading={data.heading}
                  location={data.location}
                  massage={data.massage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
