import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question = {
    question_title: '',
    exam_id: '',
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
    correct_answer: ''
  }

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
  }

  add() {
    this._rest.add_question(this.question).subscribe((data) => {
      console.log(data);
      alert('Question added successfully');
    }, err => {
      console.log(err);
      alert('Somthing went Wrong');
    });
  }

}
