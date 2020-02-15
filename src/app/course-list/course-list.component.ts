import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses : AddCourse[];

  constructor(private addCourseService : AddCourseService) { 
     this.addCourseService.getCourses().subscribe(courses=>{
       this.courses=courses;
       console.log("Course",courses)
     })
  }

  ngOnInit() {
  }

}
