import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryReg:AngularFirestoreCollection<Categories>
  category:Observable<Categories[]>

  constructor(private afs : AngularFirestore ) { 
    this.categoryReg=this.afs.collection('categories',x=>x.orderBy('name','asc'));
    this.category=this.categoryReg.snapshotChanges().pipe(map(category=>{
     return category.map(c=>{
       const data = c.payload.doc.data() as Categories;
       data.id=c.payload.doc.id;
       return data;
     })
   }))
  }

  getCategories(){
   return this.category;
  }
}
