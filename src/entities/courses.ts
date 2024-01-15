import {TechStack} from "./techStack";

export interface Course {
    id?:string;
    title: string;
    description: string;
    summary: string;
    coverImage: string;
    certificationImage: string;
    techStackId: string[];
    // acquired_date: Date;
    length: number;


}