import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AddCourse } from './models/add-course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  addCourseReg : AngularFirestoreCollection<AddCourse>
  addCourse : Observable<AddCourse[]>
  
  constructor(private afs : AngularFirestore) { 
    this.addCourseReg=this.afs.collection('courses');
    this.addCourse=this.addCourseReg.valueChanges();
  }
  add(course){
    this.addCourseReg.add(course).then(()=>{
      console.log("Course added successfully");
    }).catch((error)=>{
      console.log("Error",error);
    })
  }
}
