import { Component, DoCheck, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'course-details',
  //standalone: true,
  //imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent{

  @Input()
  course:Course;
  update:boolean=false;
  category:Category[];
  itemCategory:Category;
  isLecturer:boolean=false;
  
  UpdateCourseDetails(){
    this.update=true;
  }

  isNextWeek(startDate: Date): boolean {
    const nextWeekDate = new Date(); 
    nextWeekDate.setDate(nextWeekDate.getDate() + 7); 
    const courseStart = new Date(startDate);
    return nextWeekDate.getDate()-courseStart.getDate()<=7;
  }

  ngOnInit(): void {
    this._categoryService.getCategory().pipe(
      tap((res) => {
        this.category = res;
        this.itemCategory = this.category?.find(cat => cat.id == this.course.category);
      })
    ).subscribe();
    this.isLecturer=localStorage.getItem('lecturer') === this.course.lecturer?true:false;
  }
 constructor(private _categoryService:CategoryService,private router:Router){} 
}