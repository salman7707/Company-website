import { IMAGES } from "../../public/images";

interface ImageData {
    id?: number;
    src?: string;
    heading?: string;
    subheading?: string;
    arrow?: boolean;
    translate?:number
}

const HowToApply: ImageData[] = [
    {
        id: 1,
        src: IMAGES.FIRSTSEC,
        heading:"Application",
        subheading: "Drop us on Application",
        arrow: true,
        translate:0,
    },
    {
        id: 2,
        src: IMAGES.SECONDSEC,
        heading:"Technical Assessment",
        subheading:"Show us your skills on a practical assigment",
        arrow: true,
        translate:32,
    },
    {
        id: 3,
        src: IMAGES.THIRDSEC,
        heading:"Interview",
        subheading:"impress us in an interview",
        arrow: false,
        translate:60,
    },
]
export default HowToApply;