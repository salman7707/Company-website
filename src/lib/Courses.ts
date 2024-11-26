import { CoursesDataType } from "@/components/shared/types/collectionsListTypes/CoursesType";
import { IMAGES } from "../../public/images";

const CoursesData: CoursesDataType[] = [
    {
        id: 1,
        src: IMAGES.COURSE1,
        category: "Art and Design",
        time: "12 weeks",
        heading: "Graphic Designing"
    },
    {
        id: 2,
        src: IMAGES.COURSE2,
        category: "Development",
        time: "20 weeks",
        heading: "Full-Stack Web Development"
    },
    {
        id: 3,
        src: IMAGES.COURSE3,
        category: "E-Commerce",
        time: "8 weeks",
        heading: "Amazon FBA"
    },
    {
        id: 4,
        src: IMAGES.COURSE4,
        category: "Development",
        time: "12 weeks",
        heading: "Android Development JAVA"
    },
    {
        id: 5,
        src: IMAGES.COURSE5,
        category: "E-Commerce",
        time: "6 weeks",
        heading: "Mastering Shopify Techniques"
    },
    {
        id: 6,
        src: IMAGES.COURSE6,
        category: "Digital Marketing",
        time: "16 weeks",
        heading: "Digital Marketing"
    },
]

export default CoursesData;