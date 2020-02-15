import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular7-data-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  courses:AddCourse[];
  subscription:Subscription;
  tableResource:DataTableResource<AddCourse>;
  items:AddCourse[]=[];
  itemCount:number;
  
  constructor(private courseService : AddCourseService,private router : Router) {
     this.subscription=this.courseService.getCourses().subscribe(courses=>{
       this.courses=courses;
       console.log("Course",courses);
     })
   }
  delete(course){
    this.courseService.deleteCourse(course);
  }
   ngOnInit() {
   }
   
}
