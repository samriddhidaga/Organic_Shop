import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../models/course';
import { AddCourseService } from '../add-course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  course;
  courses : CourseCategory[]=[
    {name:'development',value:'Development'},
    {name:'music',value:'Music'},
    {name:'photography',value:'Photography'},
    {name:'marketing',value:'Marketing'},
    {name:'finance',value:'Finance & Accounting'},
    {name:'design',value:'Design'}
  ];
  
  constructor(private courseService : AddCourseService,
              private router : Router,
              private route : ActivatedRoute) {
      
      let id = this.route.snapshot.paramMap.get('id');
      if(id) this.courseService.getCourseId(id).pipe(take(1)).subscribe(c=>this.course=c)
   }

  ngOnInit() {
  }
  save(course){
    this.courseService.add(course);
    this.router.navigate(['/course-list']);
  }

}
