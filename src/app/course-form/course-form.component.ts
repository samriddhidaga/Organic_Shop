import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CourseRegService } from '../course-reg.service';
import { CourseCategory } from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
   courses : CourseCategory[]=[
     {name:'developemnt',value:'Development'},
     {name:'music',value:'Music'},
     {name:'photography',value:'Photography'},
     {name:'marketing',value:'Marketing'},
     {name:'finance',value:'Finance & Accounting'}
   ];
   id;
 // category$;

  constructor(private regService : CourseRegService,private router : Router) { 
   // this.category$=catService.getCategories();
  }

  ngOnInit() {
  }

  save(user){
    this.regService.addUser(user);
    this.router.navigate(['/course-list']);
  }
  // deleteUser(){
  //   if(!confirm('Are you sure you want to delete this?')) return;

  //   this.regService.deleteUser(this.id);
  //   this.router.navigate(['/course-list'])
  // }
}
