import { questions } from 'src/app/shared/questions';
import { QuizService } from './../service/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratz-popup',
  templateUrl: './gratz-popup.component.html',
  styleUrls: ['./gratz-popup.component.scss']
})
export class GratzPopupComponent implements OnInit {

  constructor(
    private readonly quizS: QuizService
  ) { }

  ngOnInit(): void {
  }

  questions = questions;
  
  get userAnswers() {
    return this.quizS.userAnswers
  }

  get answersLength() {
    return this.quizS.userAnswers.length
  }
}
