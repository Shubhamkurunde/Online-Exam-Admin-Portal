import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token = '';
  admin = {};
  questions: any[] = [];
  question: any[] = [];

  constructor(private _router: Router) { }

  decodeToken() {
    this.admin = jwt_decode(this.token);
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.decodeToken();
    } else {
      this._router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}
