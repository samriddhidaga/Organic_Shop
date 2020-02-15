import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from '../category.service';
import { Categories } from '../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses : AddCourse[] =[];
  filteredCourses : AddCourse[] =[];
  category:Categories[];
  cat:string;

  constructor(private route : ActivatedRoute,
    private addCourseService : AddCourseService,
    private catService : CategoryService) { 
     
      this.addCourseService.getCourses().pipe(switchMap(courses=>{
       this.courses=courses;
       return route.queryParamMap
      })).subscribe(params=>{
        this.cat=params.get('category');
        this.filteredCourses=(this.cat)?
        this.courses.filter(c=>c.category===this.cat):
        this.courses;
      })
       //console.log("Course",courses)     
       
       this.catService.getCategories().subscribe(category=>{
         this.category=category;
         console.log("Category",category)
       })

     
  }

  ngOnInit() {
  }
}
