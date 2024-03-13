import { HttpClient } from "@angular/common/http";
import { Course } from "../models/course.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseService{

    getCourses():Observable<Course[]>{
        return this._http.get<Course[]>("https://localhost:7175/api/Course");
    }
    addCourse(course:Course):Observable<Course>{
        return this._http.post<Course>("https://localhost:7175/api/Course",course);
    }
    constructor(private _http:HttpClient){

    }
}