import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { questions } from 'src/app/shared/questions';
import { fourthQuestionForks } from 'src/app/shared/fourth-question-forks';
import { seventhQuestionForks } from 'src/app/shared/seventh-question-forks';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions = questions;
  fourthQuestionForks = fourthQuestionForks;
  seventhQuestionForks = seventhQuestionForks;

  index = 0;

  userAnswers: string[] = [];

  obs = of(this.questions).pipe(map(array => array[this.index]));

  progressBarValue(): number { return (100 / this.questions.length) * (this.index); }

  updateUserAnswers(answer: string): void {
    console.log('answer: ', answer);
    // business logic
    let shifted = false;
    if (this.index === 3 && answer === this.questions[3].variants[3]) {
      shifted = true;
      this.questions.splice(4, 0, {
        title: 'УВЕЛИЧЕНИЕ КРЕДИТА',
        videoId: "irRzkHaLPAE",
        question: 'На какой срок необходим кредит?',
        variants: [ '1 миллион рублей', '2 миллиона рублей', '3 миллиона рублей' ],
        replies: [],
      });
    };
    if ((shifted && this.index === 6) || (!shifted && this.index === 5)) {
      switch (answer) {
        case 'Авто':
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[0])
          break;
        case 'Недвижимость':
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[1])
          break;
        case 'Рефинансирование': 
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[2])
          break;
        case 'Ремонт': 
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[3])
        break;
        case 'Бизнес': 
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[4])
        break;
        case 'Лечение': 
          this.questions.splice((this.index + 1), 0, this.fourthQuestionForks[5])
        break;
      }
    }
    if (shifted && this.index === 7 || !shifted && this.index === 6) {
      if (this.userAnswers.includes('Авто')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[0]);
      }
      if (this.userAnswers.includes('Недвижимость')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[1]);
      }
      if (this.userAnswers.includes('Рефинансирование')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[2]);
      }
      if (this.userAnswers.includes('Ремонт')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[3]);
      }
      if (this.userAnswers.includes('Бизнес')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[4]);
      }
      if (this.userAnswers.includes('Лечение')) {
        this.questions.splice((this.questions.length + 1), 0, this.seventhQuestionForks[5]);
      }
    }
    // normalno
    if (this.index < this.questions.length) {
      this.index = this.index + 1;
      this.userAnswers.push(answer);
    }
  }
}
