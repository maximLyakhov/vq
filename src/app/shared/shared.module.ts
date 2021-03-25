import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // для "ответа" на выбор
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({ 
  imports: [
    MatCardModule,
    CommonModule,
    MatDialogModule, 
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule, 
  ],
  exports: [
    MatCardModule,
    MatDialogModule, 
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule, 
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class SharedModule { }
