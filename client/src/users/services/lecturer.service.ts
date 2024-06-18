import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Lecturer } from "../models/lecturer.model";

@Injectable()
export class LecturerService{
    getLecturer():Observable<Lecturer[]>{
        return this._http.get<Lecturer[]>("https://localhost:7175/api/Lecturer");
    }
    constructor(private _http:HttpClient){
    }
}