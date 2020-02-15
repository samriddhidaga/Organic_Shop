import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AddCourse } from './models/add-course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  addCourseReg : AngularFirestoreCollection<AddCourse>;
  addCourse : Observable<AddCourse[]>;
  courseDoc : AngularFirestoreDocument<AddCourse>;
  
  constructor(private afs : AngularFirestore) { 
    this.addCourseReg=this.afs.collection('courses');
    this.addCourse=this.addCourseReg.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as AddCourse;
        data.id=a.payload.doc.id;
        return data;
      })
    }))
  }
  add(course){
    this.addCourseReg.add(course).then(()=>{
      console.log("Course added successfully");
    }).catch((error)=>{
      console.log("Error",error);
    })
  }
  getCourses(){
    return this.addCourse;
  }
  getCourseId(courseId){
    return this.afs.collection('courses'+ courseId).valueChanges();
  }
  deleteCourse(course){
    this.courseDoc=this.afs.doc(`courses/${course.id}`);
    this.courseDoc.delete().then(()=>{
      console.log("Delete Successfully");
    }).catch((error)=>{
      console.log("Error",error);
    })
  }
}
