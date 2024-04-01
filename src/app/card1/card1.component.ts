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
	@Input({required:true}) 
	index: number;
	@Input({required:true}) 
	total: number;
	
	@Output("courseSelected")
	// type of event argument in brackets
	emitter = new EventEmitter<Course>(); 
	
	OnClickViewCourse(){
		console.log("clicked!");
		this.emitter.emit(this.course);
	}
	
	cardClasses(){
		if (this.course.category == 'BEGINNER')	{
			return 'beginner';
		}
  }

  titleStyles() {
    return {
      'text-decoration': 'underline',
      'background-color': this.course.category == 'BEGINNER' ? 'lightblue' : 'lightgreen'
    };
  }
}
