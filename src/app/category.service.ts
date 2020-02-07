import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs : AngularFirestore ) { }

  getCategories(){
    return this.afs.collection('categories',x=>x.orderBy('name','asc')).snapshotChanges()
      .pipe(map((course:any[])=>{
        return course.map(c=>{
          const data=c.payload.doc.data();
          const id=c.payload.doc.id;
          return <any>{id,...data}
        })
      }))
  }
}
