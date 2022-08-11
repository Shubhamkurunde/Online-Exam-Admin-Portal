import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminService } from './admin.service';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient, private _admin: AdminService) { }

  login(data: any) {
    return this._http.post(environment.url + '/login', data)
  }

  add_question(data: any) {
    this._admin.checkToken();
    const headers = new HttpHeaders({ 'token': this._admin.token });
    return this._http.post(environment.url + '/add_question', data, { headers });
  }

  get_all_question() {
    this._admin.checkToken();
    const headers = new HttpHeaders({ 'token': this._admin.token });
    return this._http.get(environment.url + '/get_all_question', { headers });
  }

  delete_question(question_id: number) {
    this._admin.checkToken();
    const headers = new HttpHeaders({ 'token': this._admin.token });
    return this._http.delete(environment.url + '/delete_question/ ' + question_id, { headers })
  }

  update_question(question_id: number, data: any) {
    this._admin.checkToken();
    const headers = new HttpHeaders({ 'token': this._admin.token });
    return this._http.put(environment.url + '/update_question/' + question_id, data, { headers })
  }

  get_single_question(question_id: number) {
    this._admin.checkToken();
    const headers = new HttpHeaders({ 'token': this._admin.token });
    return this._http.get(environment.url + '/get_single_question/' + question_id, { headers });
  }



}
