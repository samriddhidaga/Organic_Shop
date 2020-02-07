import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { CourseReg } from './models/course-reg';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseRegService {
  courseReg : AngularFirestoreCollection<CourseReg>
  course:Observable<CourseReg[]>

  constructor(private afs : AngularFirestore) { 
    this.courseReg=this.afs.collection('registration');
    this.course=this.courseReg.valueChanges();
  }

  addUser(user){
    this.courseReg.add(user).then(()=>{
      console.log("User added successfully");
    }).catch((error)=>{
      console.log("Error",error);
    })
  }
}
