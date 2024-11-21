import { IMAGES } from "../../public/images";

interface ImageData {
    id?: number;
    src?: string;
    heading?: string;
    subheading?: string;
    arrow?: boolean;
}

const HowToApply: ImageData[] = [
    {
        id: 1,
        src: IMAGES.FIRSTSEC,
        heading:"Application",
        subheading: "Drop us on Application",
        arrow: true,
    },
    {
        id: 2,
        src: IMAGES.SECONDSEC,
        heading:"Technical Assessment",
        subheading:"Show us your skills on a practical assigment",
        arrow: true,
    },
    {
        id: 3,
        src: IMAGES.THIRDSEC,
        heading:"Interview",
        subheading:"impress us in an interview",
        arrow: false,
    },
]
export default HowToApply;