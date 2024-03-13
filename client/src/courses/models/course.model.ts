import { Category } from "./category.model";

export class Course{
    id:number;
    name:string;
    category:number;
    countOfLessons:number;
    start:Date;
    syllabus:string[];
    study:Study;
    lecturer:string;
    image:string;
}
export enum Study{'frontal','zoom'};