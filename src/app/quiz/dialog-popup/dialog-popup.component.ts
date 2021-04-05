import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { questions } from 'src/app/shared/questions';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent implements OnInit {

  questionData: any;
  preview = '';
  selected = -1;
  questions = questions;

  get index(): number {
    return this.quizS.index;
  }

  constructor(
    private dialogRef: MatDialogRef<DialogPopupComponent>,
    private readonly quizS: QuizService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.quizS.obs.subscribe(res => {
      this.questionData = res;
      this.preview = `https://img.youtube.com/vi/${res.videoId}/0.jpg`;
    });
  }

  closeDialog(answer: any, selected: number): void {
    if (answer) {
      const duration = 3000;
      if (this.questionData.replies.length) {
        this.snackBar.open(
          this.questionData.replies[selected], 'Хорошо!',
          { duration, horizontalPosition: 'center', verticalPosition: 'top'});
        setTimeout(() => {
          this.dialogRef.close(answer);
        }, duration);
      } else {
        this.dialogRef.close(answer);
      }
    } else {
      console.error(answer);
    }
  }
}
