import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../users/login/login.component';
import { RegisterComponent } from '../users/register/register.component';
import { AllCoursesComponent } from '../courses/all-courses/all-courses.component';
import { AddCourseComponent } from '../courses/add-course/add-course.component';
import { Injectable, NgModule } from '@angular/core';
import { EditCourseComponent } from '../courses/edit-course/edit-course.component';
import { LogoutComponent } from '../users/logout/logout.component';

export const routes: Routes = [
   {path:"login",component:LoginComponent},
   {path:"login/lecturer",component:LoginComponent},
   {path:"logout",component:LogoutComponent},
   {path:"register",component:RegisterComponent},
   {path:"register/:name",component:RegisterComponent},
   {path:"courses",component:AllCoursesComponent},
   {path:"addCourse",component:AddCourseComponent},
   {path:"editCourse",component:EditCourseComponent},
   {path:"editCourse/:id",component:EditCourseComponent},
   {path:"",component:AllCoursesComponent},
   {path:"**",component:AllCoursesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
