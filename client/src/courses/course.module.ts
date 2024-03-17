import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseService } from "./services/course.service";
import { CategoryService } from "./services/category.service";
import { EditCourseComponent } from "./edit-course/edit-course.component";




@NgModule({
    declarations:[AllCoursesComponent,AddCourseComponent,CourseDetailsComponent,EditCourseComponent],
    imports:[CommonModule,ReactiveFormsModule,HttpClientModule],
    providers:[CourseService,CategoryService],
    exports:[AllCoursesComponent,AddCourseComponent]
})
export class CourseModule{

}