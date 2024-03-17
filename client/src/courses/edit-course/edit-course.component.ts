import { Component, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'edit-course',
  //standalone: true,
  //imports: [],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})
export class EditCourseComponent {
  @Input()
  course:Course;
  courseForm:FormGroup=new FormGroup({});
  validation:boolean=false;
  courseToAdd: Course;
  categories:Category[];
  courses:Course[];
  courseId:number;
  inputs:string[]=[''];
  l:number=this.inputs.length;
  onCancel(){
    this.router.navigate(['/courses']);
  }
  onSubmit(){
    console.log(this.courseForm.value);
    this.validation = (!this.courseForm.valid || this.inputs.length < 2) ? true : false;
    if(this.validation==false){
      this.courseToAdd = {
        "id": +this.course.id,
        "lecturer":localStorage.getItem('lecturer'),
        "name": this.courseForm.value.name,
        "category": +this.courseForm.value.category,
        "countOfLessons": +this.courseForm.value.countOfLessons,
        "start": this.courseForm.value.start,
        "syllabus": this.inputs,
        "study": +this.courseForm.value.study,
        "image": this.courseForm.value.image
      };
      console.log("course to add", this.courseToAdd);
      this._courseService.updateCourse(this.courseToAdd).subscribe(s => {
        console.log("s", s);
        if (s != undefined) {
          console.log("s"+s);
          Swal.fire("Success", "The course was updated successfully!!!", "success");
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

    console.log("edit course component");
    this._categoryService.getCategory().subscribe(res=>{
      console.log("category is: "+res);
      this.categories=res
    })

      this.courseForm=new FormGroup({
        "name":new FormControl(this.course.name,[Validators.required, Validators.minLength(2)]),
        "category":new FormControl(this.course.category,Validators.required),
        "countOfLessons":new FormControl(this.course.countOfLessons,Validators.required),
        "start":new FormControl(this.course.start,Validators.required),
        "study":new FormControl(this.course.study,Validators.required),
        "image":new FormControl(this.course.image,Validators.required)
      })
    
  }
  constructor(private _categoryService:CategoryService,private _courseService:CourseService,private router:Router,private route:ActivatedRoute){}

}
