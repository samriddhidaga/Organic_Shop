import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradService implements CanActivate{

  constructor(private authService : AuthService,private router : Router) { }
  canActivate(route,state : RouterStateSnapshot){
    return this.authService.user.pipe(map((user=>{
      if(user) return true;

      this.router.navigate(['/login']);
      return false;
    })));
  }
}
