import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import {  Router } from '@angular/router';
import { LecturerService } from '../services/lecturer.service';
import { Lecturer } from '../models/lecturer.model';
@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    
    loginForm:FormGroup|undefined;
    
    users:User[];
    lecturers:Lecturer[];
    exitUser:User;
    exitLecturer:Lecturer;
    wrongPassword:boolean=false;
    isEnterLecturer:boolean=false;
    wrongNL:boolean=false;
    wrongPL:boolean=false;
    //courseName:string;
    onSubmit(){
      console.log(this.loginForm.value.name);
      if(this.isEnterLecturer){
        this.exitLecturer=this.lecturers.find(lecturer=>lecturer.name==this.loginForm.value.name);
        if(this.exitLecturer==undefined){
          this.wrongNL=true;
        }
        else if(this.exitLecturer.password!=this.loginForm.value.password){
          this.wrongPL=true;
        }
        else{
          sessionStorage.setItem("Lecturer",this.loginForm.value.name);
          this.router.navigate(['/courses']);
        }        
      }
      else{
        this.exitUser=this.users.find(user=>user.name==this.loginForm.value.name);
        if(this.exitUser==undefined){
          localStorage.setItem("username",this.loginForm.value.name)
          this.router.navigate(['/register'])
        }
        else if(this.exitUser.password!=this.loginForm.value.password){
          this.wrongPassword=true;
        }
        else{
          this.router.navigate(['/courses'])
        }
      }            
    }
    enterLecturer(){
      this.router.navigateByUrl('/login/lecturer',{replaceUrl:true});
      this.wrongPassword=false;
      this.isEnterLecturer=true;
      this.loginForm=new FormGroup({
        "name":new FormControl(""),
        "password":new FormControl(""),
        "course":new FormControl("")
      });
    }
    // nameCourse(course:any){
    //   this.courseName=course.target.value;
    // }
    ngOnInit(): void {

      this._userService.getUsers().subscribe(res=>
        this.users=res
      )
      this._lecturerService.getLecturer().subscribe(res=>
        this.lecturers=res
      )
      this.loginForm=new FormGroup({
        "name":new FormControl(""),
        "password":new FormControl(""),
      });
    }
         
    constructor(private _userService:UserService,private router:Router,private _lecturerService:LecturerService){}

}
