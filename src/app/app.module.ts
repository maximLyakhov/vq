import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { VideoComponent } from './quiz/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { GratzPopupComponent } from './quiz/gratz-popup/gratz-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPopupComponent } from './quiz/dialog-popup/dialog-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    VideoComponent,
    GratzPopupComponent,
    DialogPopupComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
