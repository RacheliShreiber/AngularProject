import { Component, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'course-details',
  //standalone: true,
  //imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  @Input()
  course:Course;

  category:Category[];
  
  categoryId:Category;
  isLecturer:boolean;

  UpdateCourseDetails(){
    //update course details
    //to send to component ADDCOURSES
  }

  ngOnInit(): void {
    this._categoryService.getCategory().subscribe(res=>
      this.category=res
    )
   this.categoryId=this.category?.find(cat=>cat.id==this.course.category);
   this.isLecturer=sessionStorage.getItem('Lecturer')==this.course.lecturer;
  }
  constructor(private _categoryService:CategoryService){}

}
