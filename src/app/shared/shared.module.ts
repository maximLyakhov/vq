import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // для "ответа" на выбор
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({ 
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatDialogModule, 
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule, 
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatInputModule,
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
