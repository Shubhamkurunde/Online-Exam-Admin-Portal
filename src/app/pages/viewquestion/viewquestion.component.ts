import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {

  constructor(public _admin: AdminService, private _rest: RestService, private _router: Router) { }

  ngOnInit(): void {
    this.get_all_question();
  }

  get_all_question() {
    this._rest.get_all_question().subscribe(
      (data) => {
        console.log(data)
        this._admin.questions = (data as any)['data'];
      }, err => {
        console.log(err);
      });
  }

  delete(question_id: number) {
    if (confirm('Are you sure?')) {
      this._rest.delete_question(question_id).subscribe((data) => {
        console.log(data);
      }, err => {
        console.log(err);
        this.get_all_question();
      });
    }
  }

  update(){

  }

}
