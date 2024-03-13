import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseModule } from '../courses/course.module';
import { UserModule } from '../users/user.module';
import { AppRoutingModule, routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CourseModule,UserModule,AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck{
  title = 'project';
  Lecturer:boolean;
  
  ngDoCheck(): void {
    this.Lecturer=sessionStorage.getItem("Lecturer")?true:false;
  }
}
