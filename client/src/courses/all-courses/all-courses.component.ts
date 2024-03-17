import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'all-courses',
  //standalone: true,
  //imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent {

  courses:Course[];

  ngOnInit(): void {
    this._coursesService.getCourses().subscribe(res=>{
      this.courses=res;
      console.log(this.courses);
    }
    )  
  }
  constructor(private _coursesService:CourseService){}
}
