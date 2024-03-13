import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { Course } from '../models/course.model';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'add-course',
  //standalone: true,
  //imports: [],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {

  categories:Category[];
  addCourse:FormGroup=new FormGroup({});
  xxx:string;
  @Input()
  course:Course;
 // str:number[];
// i:number=0;
  str:string[]=[];
  onSubmit(){
    console.log(this.addCourse.value)
  }
  onSyllabusBlur(s:string,i:number) {
    // console.log("");

    console.log(this.xxx);
    console.log(s);
      //const syllabusControl = new FormControl(this.xxx);
      //(this.addCourse.get('syllabus') as FormArray).clear;
      this.str.push(s);
      (this.addCourse.get('syllabus') as FormArray).push(new FormControl(""));
      //(this.addCourse.get('syllabus') as FormArray).push(new FormControl(""));
      //console.log(this.addCourse["syllabus"])
      //this.addCourse.get('syllabus').value[i]=s;
      this.xxx=""
      //this.addCourse.get('syllabus').value[i+1]="";
      s=""
      //this.i++;
      //this.str.push(this.i);
    for (let index = 0; index < this.str.length; index++) {
      this.addCourse.get('syllabus').value[i]=this.str[i];
      
    }
      this.str.forEach(element => {
        
      });
      console.log(this.str);
      console.log(this.addCourse.get('syllabus'));
    }
 
  // onAddNewSyllabusItem(value: string) {
  //   const syllabusControl = new FormControl(value);
  //   (this.addCourse.get('syllabus') as FormArray).push(syllabusControl);
  // }
  

  // onSyllabusBlur(value: string) {
  //   // console.log("");

  //   console.log(value);
  //     const syllabusControl = new FormControl(value);
  //     //(this.addCourse.get('syllabus') as FormArray).clear;
  //     //(this.addCourse.get('syllabus') as FormArray).push(new FormControl(""));
  //     //(this.addCourse.get('syllabus') as FormArray).push(new FormControl(""));
  //     //console.log(this.addCourse["syllabus"])
  //     this.addCourse.get('syllabus').value[this.i]=value;
  //     this.addCourse.get('syllabus').value[this.i+1]="";
  //     this.i++;
  //     this.str.push(this.i);
  //     console.log(this.addCourse.get('syllabus'));
  //   }
 

  ngOnInit(): void {

    this._categoryService.getCategory().subscribe(res=>{
      console.log("category is: "+res);
      this.categories=res
      
      
    })
      
    if(this.course==undefined){
      this.addCourse=new FormGroup({
       "name":new FormControl(""),
       "category":new FormControl(""),
       "countOfLessons":new FormControl(""),
       "start":new FormControl(""),
       "study":new FormControl(""),
       "image":new FormControl(""),
       "syllabus":new FormArray([new FormControl("")])
     })
   }
   else{
     this.addCourse=new FormGroup({
       "name":new FormControl(this.course.name),
       "category":new FormControl(this.course.category),
       "countOfLessons":new FormControl(this.course.countOfLessons),
       "start":new FormControl(this.course.start),
       "study":new FormControl(this.course.study),
       "image":new FormControl(this.course.image),
       "syllabus":new FormArray([])
     })
   }
    
  }
  constructor(private _categoryService:CategoryService){}
}
