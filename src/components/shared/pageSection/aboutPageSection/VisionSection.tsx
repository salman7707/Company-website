import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";

export default function VisionSection() {
  return (
    <div className="relative py-10 md:px-44 px-3 w-full max-w-[1210px] mx-auto space-y-1">
      <HeaderLarge
        color="black"
        fontSize="48"
        textAlign="text-center"
        fontFamily="font-custom"
        weight="medium"
        mdScreenFont="48"
        smallScreenFont="36"
      >
        Vision
      </HeaderLarge>
      <Paragraph color="black" fontSize="extralarge" textAlign="text-center" weight="medium">
        At Netixsol, we are propelling towards a decentralized future by
        providing transparent, secure, and trustless systems that eliminate the
        need for intermediaries. Through cryptographic techniques and
        decentralized networks, blockchain ensures data integrity and empowers
        individuals with control over their assets and identities.{" "}
      </Paragraph>
    </div>
  );
}
