import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CourseRegService } from '../course-reg.service';
import { CourseCategory } from '../models/course';

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
   ]

  category$;

  constructor(private regService : CourseRegService) { 
   // this.category$=catService.getCategories();
  }

  ngOnInit() {
  }

  save(user){
    this.regService.addUser(user);
  }
}
