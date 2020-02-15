import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../models/course';
import { AddCourseService } from '../add-course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  courses : CourseCategory[]=[
    {name:'development',value:'Development'},
    {name:'music',value:'Music'},
    {name:'photography',value:'Photography'},
    {name:'marketing',value:'Marketing'},
    {name:'finance',value:'Finance & Accounting'}
  ];
  
  constructor(private courseService : AddCourseService,private router : Router) {
    
   }

  ngOnInit() {
  }
  save(course){
    this.courseService.add(course);
    this.router.navigate(['/course-list']);
  }
}
