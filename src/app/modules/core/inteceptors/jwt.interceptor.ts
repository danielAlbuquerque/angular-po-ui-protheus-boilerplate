import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../auth/services/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authenticationService.currentUserValue;
        
        if (currentUser && currentUser.user.accessToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.user.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}
