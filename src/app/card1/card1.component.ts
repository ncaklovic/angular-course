import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
	@Input() 
	course: Course;
	
	@Output("courseSelected")
	// type of event argument in brackets
	emitter = new EventEmitter<Course>(); 
	
	OnClickViewCourse(){
		console.log("clicked!");
		this.emitter.emit(this.course);
	}
}
