import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";

export default function FeaturedSection() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center space-y-3">
        <Paragraph
          color="black"
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
    </div>
  );
}
