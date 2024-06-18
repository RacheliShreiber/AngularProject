import { HttpClient } from "@angular/common/http";
import { Course } from "../models/course.model";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseService{

    private coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
    public courses$: Observable<Course[]> = this.coursesSubject.asObservable();
    getCourses():Observable<Course[]>{
        return this._http.get<Course[]>("https://localhost:7175/api/Course");
    }
    addCourse(course:Course):Observable<Course>{
        return this._http.post<Course>("https://localhost:7175/api/Course",course);
    }

    updateCourse(course: Course): Observable<Course> {
        return this._http.put<Course>(`https://localhost:7175/api/Course/${course.id}`, course);
    }
    refreshCourses() {
        this.getCourses().subscribe(courses => {
          this.coursesSubject.next(courses);
        });
      }
    constructor(private _http:HttpClient){
        this.refreshCourses();
    }
}