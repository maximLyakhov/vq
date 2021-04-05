import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { questions } from 'src/app/shared/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions = questions;

  index = 0;

  userAnswers: string[] = [];

  obs = of(questions).pipe(map(array => array[this.index]));

  progressBarValue(): number { return (100 / this.questions.length) * (this.index); }

  updateUserAnswers(answer: string): void {
    if (this.index < this.questions.length) {
      this.index = this.index + 1;
      this.userAnswers.push(answer);
    }
  }
}
