"use client"
import HeroSection from '@/components/shared/pageSection/homePageSection/HeroSection'
import React from 'react'
import { IMAGES } from '../../../public/images'
import MissionSection from '@/components/shared/pageSection/aboutPageSection/MissionSection'
import VisionSection from '@/components/shared/pageSection/aboutPageSection/VisionSection'
import IconsSection from '@/components/shared/pageSection/aboutPageSection/IconsSection'
import CeoSection from '@/components/shared/pageSection/aboutPageSection/CeoSection'
import ReadyToBuild from '@/components/shared/pageSection/servicePageSection/ReadyToBuild'
import { useMyContext } from '@/contexts/MyContexts'

export default function page() {
  const {theme} = useMyContext();
  return (
    <div className={`${theme === "light"? "bg-white" : "bg-black" } `}>
        <HeroSection heading='About US' headingFont={64} paragraph='NetixSol Pvt LTD. is a blockchain development company. We are pioneers in the world of blockchain technology. We specialize in providing innovative and advanced blockchain solutions that empower businesses to harness the full potential of decentralized, secure, and transparent systems. Our journey began with a vision to revolutionize industries through blockchain, and today, we stand as a leading force in the blockchain development space.'
        img={IMAGES.ABOUTBG}
        imgH={200}
        imgW={548}
        />
        <MissionSection/>
        <VisionSection/>
        <IconsSection/>
        <CeoSection/>
        <ReadyToBuild/>
    </div>
  )
}
