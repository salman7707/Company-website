import { navDataTypes } from "@/components/shared/types/collectionsListTypes/navLinktypes";

const navData: navDataTypes[] = [
    {
        id: 0,
        name: "Services",
        link: "/services"
    },
    {
        id: 1,
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        id: 2,
        name: "Courses",
        link: "/courses"
    },
    {
        id: 3,
        name: "Our Company",
        link: "/about",
        inside: [
            {
                id: 0,
                name: "About",
                link: "/about",
            },
            {
                id: 1,
                name: "careers",
                link: "/careers",
            },
        ]
    },
]
export default navData;