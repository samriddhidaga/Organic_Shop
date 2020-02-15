import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddCourseService } from '../add-course.service';
import { AddCourse } from '../models/add-course';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular7-data-table';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit,OnDestroy {
  courses:AddCourse[];
  subscription:Subscription;
  tableResource:DataTableResource<AddCourse>;
  items:AddCourse[]=[];
  itemCount:number;
  
  constructor(private courseService : AddCourseService) {
     this.subscription=this.courseService.getCourses().subscribe(courses=>{
       this.courses=courses;
      // this.intializeTable(courses);
       console.log("Course",courses);
     })
   }
    
  //  intializeTable(courses:AddCourse[]){
  //    this.tableResource=new DataTableResource(courses);
  //    this.tableResource.query({offset:0})
  //    .then(items=>this.items=items);
  //     this.tableResource.count()
  //    .then(count=>this.itemCount=count)
  //  }
  // reloadItems(params){
  //   if(!this.tableResource) return;

  //   this.tableResource.query(params)
  //    .then(items=>this.items=items);
  // }

 // displayedColumns:string[]=['courseName']
//  dataSource=this.courses;


   ngOnInit() {
   }
   ngOnDestroy(){
  //   this.subscription.unsubscribe();
   }
}
