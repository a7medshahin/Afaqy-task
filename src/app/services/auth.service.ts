import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated() {
    if (localStorage.getItem('role') === 'user') {
      return 'user';
    } else {
      return '';
    }
  }
}
