"use Client";
import TeamCard from "@/components/template/cards/TeamCard";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import { useMyContext } from "@/contexts/MyContexts";
import TeamData from "@/lib/TeamData";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function TeamSection() {
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto">
      <div className="w-full flex flex-col items-center justify-between">
        {/* Heading Section */}
        <div className="space-y-3">
          <HeadingMedium color="primary" fontSize="20" textAlign="center">
            Our Team
          </HeadingMedium>
          <HeadingLarge
            color={theme === "light" ? "black" : "white"}
            fontSize="48"
            smallScreenFont="36"
          >
            Meet Our Experts
          </HeadingLarge>
        </div>
        <div className="xl:w-full lg:w-[95%] md:w-[90%] w-[90%] lg:py-6 py-8 overflow-hidden">
          <Swiper
            spaceBetween={20}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
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
                spaceBetween: 15,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper transition-all duration-1000 ease-in-out"
          >
            {TeamData.map((data) => (
              <SwiperSlide key={data.id}>
                <div key={data.id}>
                  <TeamCard name={data.name} role={data.role} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
