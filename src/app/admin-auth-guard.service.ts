import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth : AuthService,private router : Router) { }

  canActivate(){
    return this.auth.user.pipe(map(user=>{
       if(user.isAdmin===true) return true;

       this.router.navigate(['/access/denied']);
       return false;
    }))
  }
}
