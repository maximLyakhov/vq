import { Component, OnInit } from '@angular/core';
import { QuizService } from './service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(
    readonly quizS: QuizService,
    ) {}

  get questions() {
    return this.quizS.questions
  }

  get index() {
    return this.quizS.index
  }
  
  get userAnswers() {
    return this.quizS.userAnswers
  }

  get answersLength() {
    return this.quizS.userAnswers.length
  }

  get progressBarValue() {
    return this.quizS.progressBarValue()
  } 

  ngOnInit() {
  }
}