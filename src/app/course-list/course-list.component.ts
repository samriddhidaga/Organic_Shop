import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from '../category.service';
import { Categories } from '../models/category';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses : AddCourse[];
  category:Categories[];

  constructor(private addCourseService : AddCourseService,private catService : CategoryService) { 
     this.addCourseService.getCourses().subscribe(courses=>{
       this.courses=courses;
       console.log("Course",courses)
       this.catService.getCategories().subscribe(category=>{
         this.category=category;
         console.log("Category",category)
       })
     })
  }

  ngOnInit() {
  }
}
