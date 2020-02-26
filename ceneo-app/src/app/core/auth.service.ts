import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

  private userSubj = new BehaviorSubject<User>(null)
  get isLoggedIn() {
    return !!this.userSubj.value;
  }
  user$ = this.userSubj.asObservable();
  username$ = this.userSubj.pipe(map(user => user?.username));
  isAdmin$ = this.userSubj.pipe(map(user => user?.admin));
  isLoggedIn$ = this.userSubj.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient, private router: Router) {
    const initUser = localStorage.getItem('user');
    this.userSubj.next(initUser ? JSON.parse(initUser) : null)
  }

  login(id ='alojzy') {
    this.httpClient.get<User>(apiUrl + '/auth/' + id).subscribe(user => {
      this.userSubj.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  logout() {
    this.userSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
