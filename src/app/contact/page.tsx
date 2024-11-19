
import Heading from '@/components/shared/pageSection/contactPageSection/Heading'
import ContactUs from '@/components/shared/pageSection/homePageSection/ContactUs'
import React from 'react'

export default function page() {
  return (
    <div className=''>
        <Heading />
        <ContactUs locationSec={false} headingSec={false} consultantSec={true} />
    </div>
  )
}
