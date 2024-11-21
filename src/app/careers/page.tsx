"use client"
import ApplySection from '@/components/shared/pageSection/careersPageSection/ApplySection';
import CareerHeadingSection from '@/components/shared/pageSection/careersPageSection/CareerHeadingSection';
import OpenPosition from '@/components/shared/pageSection/careersPageSection/OpenPosition';
import { useMyContext } from '@/contexts/MyContexts'
import React from 'react'

export default function page() {
    const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light"?"bg-white":"bg-black"}`} >
        <CareerHeadingSection/>
        <ApplySection/>
        <OpenPosition/>
    </div>
  )
}
