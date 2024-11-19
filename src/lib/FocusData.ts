import { IMAGES } from "../../public/images";

interface focus {
    id: number;
    img: string;
    heading: string;
    paragraph: string;
}

const FocusData: focus[] = [
    {
        id: 1,
        img: IMAGES.ED,
        heading: "Retail",
        paragraph: "Tap into a brand new revenue stream with a custom-developed NFT marketplace.",
    },
    {
        id: 2,
        img: IMAGES.NFT1,
        heading: "Art",
        paragraph: "Unlock a new revenue stream for your artwork with custom NFT development.",
    },
    {
        id: 3,
        img: IMAGES.START,
        heading: "Music",
        paragraph: "NFTs create amazing new possibilities for musicians to connect with listeners.",
    },
    {
        id: 4,
        img: IMAGES.H,
        heading: "Health Care",
        paragraph: "Blockchain apps protect the personal info of your patients, staff, and vendors.",
    },
    {
        id: 5,
        img: IMAGES.SUBSERVICE,
        heading: "Banking",
        paragraph: "Finance-sector leaders rely on blockchain-enabled apps – is your bank next?",
    },
    {
        id: 6,
        img: IMAGES.GAMES,
        heading: "Games",
        paragraph: "Gain a competitive advantage by incorporating blockchain into your games.",
    },
    {
        id: 7,
        img: IMAGES.SUBSERVICES7,
        heading: "Real Estate",
        paragraph: "Smart contracts bring speed and security to your most important transactions",
    },
    {
        id: 8,
        img: IMAGES.SP,
        heading: "Sports",
        paragraph: "Leverage blockchain technology to connect with your fans and build support.",
    },
    {
        id: 9,
        img: IMAGES.ED1,
        heading: "Edtech",
        paragraph: "Making Tech Education more easy and fun to learn.",
    },
]
export default FocusData;