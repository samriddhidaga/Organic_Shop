import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
