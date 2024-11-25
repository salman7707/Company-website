import { IMAGES } from "../../public/images";

type data = {
  id:number;
  src:string;
  headingsmall:string;
  heading:string;
  type:string;
}

const ProjectData:data[] = [
    {
        id: 1,
        src: IMAGES.PROJ,
        headingsmall: "Weather Forecast",
        heading: "Application + SEO",
        type:"SEO",
    },
    {
        id: 2,
        src: IMAGES.PROJ2,
        headingsmall: "Grocer App",
        heading: "Application + SEO",
        type:"SEO",
    },
    {
        id: 3,
        src: IMAGES.PROJ3,
        headingsmall: "MSZ Nutrition",
        heading: "SMM + Website",
        type:"SMM Webdevelopment",
    },
    {
        id: 4,
        src: IMAGES.PROJ4,
        headingsmall: "Calorie Counter",
        heading: "Application + SEO",
        type:"SEO",
    },
    {
        id: 5,
        src: IMAGES.PROJ5,
        headingsmall: "Comfort House",
        heading: "SMM + Website",
        type:"SMM Webdevelopment",
    },
    {
        id: 6,
        src: IMAGES.PROJ6,
        headingsmall: "Logo Maker",
        heading: "Application + SEO",
        type:"SEO",
    },
    {
        id: 7,
        src: IMAGES.PROJ7,
        headingsmall: "The Grand Central Mall",
        heading: "SMM + Website",
        type:"SMM Webdevelopment",
    },
]

export default ProjectData;