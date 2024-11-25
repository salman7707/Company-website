import { IMAGES } from "../../public/images";

interface chooseus {
    id:number;
    heading:string;
    src:string;
}

const ChooseUs:chooseus[] = [
    {
        id: 1,
        heading: "10+ Proven Industry Experience",
        src: IMAGES.FRAME,
    },
    {
        id: 2,
        heading: "Certified Blockchain Developers",
        src: IMAGES.FRAME1 ,
    },
    {
        id: 3,
        heading: "Vast Range of Blockchain Solutions",
        src: IMAGES.FRAME2,
    },
    {
        id: 4,
        heading: "Scalable NFT Marketplace Development",
        src: IMAGES.FRAME3,
    },
    {
        id: 5,
        heading: "Fine Project Management",
        src:IMAGES.FRAME4,
    },
    {
        id: 6,
        heading: "On-Time and reliable delivery.",
        src: IMAGES.FRAME5,
    },
    {
        id: 7,
        heading: "Custom Cryptocurrency Solutions",
        src:IMAGES.FRAME6,
    },
    {
        id: 8,
        heading: "Support & Maintenance Services",
        src:IMAGES.FRAME7,
    }
];

export default ChooseUs;