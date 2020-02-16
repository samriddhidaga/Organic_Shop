import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { RoutingModule } from './routing/routing.module';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LoginComponent } from './login/login.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuradService } from './auth-guard.service';
import { CategoryService } from './category.service';
import { CourseRegService } from './course-reg.service';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { CustomFormsModule } from 'ng2-validation';
import { AddCourseService } from './add-course.service';
import { DataTableModule } from 'ng-angular8-datatable'
import { CdkColumnDef } from '@angular/cdk/table';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
//import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseFormComponent,
    CourseListComponent,
    AdminCourseComponent,
    NavBarComponent,
    ManageCourseComponent,
    AccessDeniedComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      { path : '', component : LoginComponent},
      { path : 'login', component : LoginComponent},
      { path : 'course-form', component : CourseFormComponent,canActivate:[AuthGuradService]},
      { path : 'course-list', component : CourseListComponent,canActivate:[AuthGuradService]},
      { path : 'admin/course', component : AdminCourseComponent,canActivate:[AuthGuradService,AdminAuthGuardService]},
      { path : 'admin/course/:id', component : AdminCourseComponent,canActivate:[AuthGuradService]},
      { path : 'admin/table', component : ManageCourseComponent,canActivate:[AuthGuradService,AdminAuthGuardService]},
      { path : 'access/denied', component : AccessDeniedComponent}
    ])
   // FlexLayoutModule
  ],
  providers: [
    AuthService,
    AuthGuradService,
    CategoryService,
    CourseRegService,
    AddCourseService,
    AdminAuthGuardService,
    CdkColumnDef
  ],
  bootstrap: [
    AppComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
