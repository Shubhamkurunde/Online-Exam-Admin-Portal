import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _rest: RestService, public _admin: AdminService, private _router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this._admin.token = token;
      this._admin.decodeToken();
      this._router.navigate(['/home']);
    }
  }

  login() {
    this._rest.login(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', (data as any).data);
        this._admin.token = (data as any).data;
        this._admin.decodeToken();
        alert((data as any)['message']);
        this._router.navigate(['/home']);
      }, err => {
        alert(err.error.message);
        console.log(err);
      });
  }

}
