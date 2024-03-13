import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
 // standalone: true,
  //imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit,OnDestroy{
  addUser:FormGroup=new FormGroup({});
  user:User;
  users:User[];
  name:string='';
  exitUser:boolean=false;
  validN:boolean=false;
  validP:boolean=false;
  // routeSub:Subscription;
  onSubmit(){
    this.validN=this.addUser.value.name==""?true:false;
    this.validP=this.addUser.value.password==""?true:false;
    if(!this.validN&&!this.validP){
      if(this.users.find(u=>u.name==this.addUser.value.name)==undefined){
        this.user=this.addUser.value;
        this._userService.addUser(this.user);
        this.router.navigate(['/courses']);
      }
      else{
        this.exitUser=true;
      }
    }    
  }
  // validateName(control: FormControl) {
  //   const enteredName = control.value;
  //   if(this.users.find(u=>u.name==this.addUser.value.name)){
  //     return { nameExists: true };
  //   }
  //   return null;
  // }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(res=>{
      console.log("category is: "+res);
      this.users=res
    })
    this.name=localStorage.getItem("username")?localStorage.getItem("username"):"";
    // this.routeSub=this.route.paramMap.subscribe(params=>{
    //   this.name=params["name"];
    // })
    this.addUser=new FormGroup({
      "name":new FormControl(this.name,[Validators.required]),
      "address":new FormControl(""),
      "email":new FormControl(""),
      "password":new FormControl("",[Validators.required])
    });
   
    
  }
  constructor(private _userService:UserService,private router:Router){}
  ngOnDestroy(): void {
    localStorage.clear();
  }
  // ngOnDestroy(): void {
  //   if(this.routeSub){
  //     this.routeSub.unsubscribe();
  //   }
  // }
  //,private route:ActivatedRoute
}
