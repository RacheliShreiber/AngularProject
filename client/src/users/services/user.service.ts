import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService{

    getUsers():Observable<User[]>{
        return this._http.get<User[]>("https://localhost:7175/api/User");
    }



    addUser(user:User):Observable<User>{
        return this._http.post<User>("https://localhost:7175/api/User",user);
    }
    constructor(private _http:HttpClient){

    }
}