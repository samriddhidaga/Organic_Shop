import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit,OnDestroy {
  courses:AddCourse[];  
  subscription:Subscription;
  filteredCourses:any[];
  
  constructor(private courseService : AddCourseService) {
     this.subscription=this.courseService.getCourses().subscribe(courses=>{
       this.filteredCourses=this.courses=courses;
       console.log("Course",courses);
     })
   }
  delete(course){
    if(!confirm('Are you sure you want to delete this course?')) return;

    this.courseService.deleteCourse(course);
  }
   ngOnInit() {
   }
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }
   filter(search:string){
      this.filteredCourses=(search)?
        this.courses.filter(c=>c.coursename.toLowerCase().includes(search.toLowerCase())):
        this.courses;
   }
}
