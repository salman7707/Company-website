"use client"
import ApplySection from '@/components/shared/pageSection/careersPageSection/ApplySection';
import BenefitsSection from '@/components/shared/pageSection/careersPageSection/BenefitsSection';
import CareerHeadingSection from '@/components/shared/pageSection/careersPageSection/CareerHeadingSection';
import FormSection from '@/components/shared/pageSection/careersPageSection/FormSection';
import LifeSection from '@/components/shared/pageSection/careersPageSection/LifeSection';
import OpenPosition from '@/components/shared/pageSection/careersPageSection/OpenPosition';
import { useMyContext } from '@/contexts/MyContexts'
import React from 'react'

export default function Careers() {
    const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light"?"bg-white":"bg-black"}`} >
        <CareerHeadingSection/>
        <ApplySection/>
        <OpenPosition/>
        <BenefitsSection/>
        <LifeSection/>
        <FormSection/>
    </div>
  )
}
