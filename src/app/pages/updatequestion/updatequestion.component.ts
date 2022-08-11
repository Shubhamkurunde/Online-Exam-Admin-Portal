import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

  question_id = 0;
  question: any;

  update: FormGroup;

  constructor(private _rest: RestService, private _route: ActivatedRoute, public _admin: AdminService) {
    this.update = new FormGroup({
      question_title: new FormControl(''),
      option_1: new FormControl(''),
      option_2: new FormControl(''),
      option_3: new FormControl(''),
      option_4: new FormControl(''),
      correct_answer: new FormControl('')
    })
  }


  ngOnInit(): void {

    this.question_id = this._route.snapshot.params['question_id'];
    this._rest.get_single_question(this.question_id).subscribe((data: any) => {
      console.log(data['data'][0]);
      this.question = data['data'][0];
      this.update.patchValue(this.question);
    }, err => {
      console.log(err);
    })
  }

  updateQuestion() {
    this._rest.update_question(this.question.question_id, this.update.value).subscribe((data) => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }


}
