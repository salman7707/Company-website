"use client"
import Heading from '@/components/shared/pageSection/contactPageSection/Heading'
import ContactUs from '@/components/shared/pageSection/homePageSection/ContactUs'
import { useMyContext } from '@/contexts/MyContexts'
import React from 'react'

export default function page() {
  const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light" ? "bg-white":"bg-black"}`}>
        <Heading />
        <ContactUs locationSec={false} headingSec={false} consultantSec={true} />
    </div>
  )
}
