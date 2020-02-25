import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

  private userSubj = new BehaviorSubject(null)
  user$ = this.userSubj.asObservable();

  constructor(private httpClient: HttpClient) {
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
    localStorage.removeItem('user')
  }
}
