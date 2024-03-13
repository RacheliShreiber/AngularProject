import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService{
    getCategory():Observable<Category[]>{
        return this._http.get<Category[]>("https://localhost:7175/api/Category");
    }
    
    constructor(private _http:HttpClient){

    }
}