
export interface navDataTypes {
    id: number;
    name: string;
    link: string;
    inside?: {
        id: number;
        name: string;
        link: string;
    }[];
}