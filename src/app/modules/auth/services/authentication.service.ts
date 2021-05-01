import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  constructor(public httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(username, password) {
    return this.httpClient.post<any>(`${environment.api}/api/oauth2/v1/token?grant_type=password&password=${password}&username=${username}`, {})
      .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
  }

logout() {
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}



}
