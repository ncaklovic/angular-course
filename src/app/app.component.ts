import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  start = new Date(2024, 3, 1);
  title = COURSES[0].description;
  price = 9.99;
  rate = 0.67;

	OnCourseSelected(course: Course){
		console.log("on card clicked - ", course);
	}
}
