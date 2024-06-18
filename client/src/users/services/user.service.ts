import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService{

    private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    public users$: Observable<User[]> = this.usersSubject.asObservable();
  
    getUsers():Observable<User[]>{
        return this._http.get<User[]>("https://localhost:7175/api/User");
    }

    addUser(user:User):Observable<User>{
        return this._http.post<User>("https://localhost:7175/api/User",user);
    }

    refreshUsers() {
        this.getUsers().subscribe(users => {
          this.usersSubject.next(users);
        });
      }
    constructor(private _http:HttpClient){
        this.getUsers().subscribe(users => {
            this.usersSubject.next(users);
          });
    }
}