import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private authenticationService: AuthenticationService, private router: Router, private notification: PoNotificationService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
          // authorised so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
      this.notification.warning('Voce precisa estar logado');
      return false;



  }
  
}
