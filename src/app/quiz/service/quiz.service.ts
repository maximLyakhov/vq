import { of } from 'rxjs';
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { questions } from 'src/app/shared/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions = questions;

  index: number = 0;

  userAnswers: string[] = [];

  progressBarValue () { return (100 / this.questions.length) * (this.index); }

  obs = of(questions).pipe(map(array => array[this.index]))

  updateUserAnswers(answer: string) {
    if (this.index < this.questions.length) {
      this.index = this.index + 1;
      this.userAnswers.push(answer)
    }
  }
}
