import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'add-course',
  //standalone: true,
  //imports: [],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  validation:boolean=false;
  courseToAdd: Course;
  categories:Category[];
  courseForm:FormGroup=new FormGroup({});
  xxx:string;
  
  inputs:string[]=[''];
  l:number=this.inputs.length;
  onSubmit(){
    console.log(this.courseForm.value);
    this.validation = (!this.courseForm.valid || this.inputs.length < 2) ? true : false;
    if(this.validation==false){
      this.courseToAdd = {
        "id": 0,
        "lecturer":localStorage.getItem('lecturer'),
        "name": this.courseForm.value.name,
        "category": +this.courseForm.value.category,
        "countOfLessons": +this.courseForm.value.countOfLessons,
        "start": this.courseForm.value.start,
        "syllabus": this.inputs,
        "study": +this.courseForm.value.study,
        "image": this.courseForm.value.image
      };
      console.log("corse to add", this.courseToAdd);
      this._courseService.addCourse(this.courseToAdd).subscribe(s => {
        console.log("s", s);
        if (s != undefined) {
          Swal.fire("Success", "The course was saved successfully!!!", "success");
          this._courseService.refreshCourses();
          this.router.navigate(['/courses']);
        } 
      })
    }
  }
  onInput(event: Event, index: number): void {
   
    const target = event.target as HTMLInputElement;
    console.log("ddd",target.value);
    const value = target.value.trim();
    if (value && index === this.inputs.length - 1) {
      this.inputs.push(value);
    } 
    else if (!value && index < this.inputs.length - 1) {
      this.inputs.splice(index + 1, 1);
    }
    this.l=this.inputs.length;
    console.log(this.inputs)
  }
  ngOnInit(): void {

    this._categoryService.getCategory().subscribe(res=>{
      console.log("category is: "+res);
      this.categories=res 
    })   
    this.courseForm=new FormGroup({
      "name":new FormControl("",[Validators.required, Validators.minLength(2)]),
      "category":new FormControl("",Validators.required),
      "countOfLessons":new FormControl("",Validators.required),
      "start":new FormControl("",Validators.required),
      "study":new FormControl("",Validators.required),
      "image":new FormControl("",Validators.required)
    }) 
  }
  constructor(private _categoryService:CategoryService,private _courseService:CourseService,private router:Router){}
}
