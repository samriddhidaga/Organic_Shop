import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  category$;

  constructor(catService : CategoryService) { 
    this.category$=catService.getCategories();
  }

  ngOnInit() {
  }
}
