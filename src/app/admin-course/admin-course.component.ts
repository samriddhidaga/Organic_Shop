import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../models/course';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  courses : CourseCategory[]=[
    {name:'developemnt',value:'Development'},
    {name:'music',value:'Music'},
    {name:'photography',value:'Photography'},
    {name:'marketing',value:'Marketing'},
    {name:'finance',value:'Finance & Accounting'}
  ];
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
