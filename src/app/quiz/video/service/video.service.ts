import { DialogPopupComponent } from 'src/app/quiz/dialog-popup/dialog-popup.component';
import { GratzPopupComponent } from '../../gratz-popup/gratz-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizService } from '../../service/quiz.service';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoId: string = '';
  start!: number;
  end!: number;
  player: any;

  constructor(
    readonly quizS: QuizService,
    readonly dialog: MatDialog,
    private zone: NgZone,
    ) {}

  initYoutubePlayer() {
    if (window['YT']) { this.createYoutubePlayer(); return }
    const tag = document.createElement('script') as HTMLScriptElement;
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag) as Element
    window['onYouTubeIframeAPIReady'] =
    () => this.createYoutubePlayer()
  }

  destroyYoutubePlayer() {
    window['onYouTubeIframeAPIReady'] = () => null;
    if (this.player) { this.player.destroy() }
  }

  reattach() {
    this.destroyYoutubePlayer()
    this.createYoutubePlayer()
  }

  createYoutubePlayer() {
    this.player = new window['YT'].Player('player', {
      videoId: this.videoId,
      width: 900,
      height: 800,
      playerVars: {
        origin: `https://${window.location.host}`,
        modestbranding: 1,
        cc_load_policy: 0,
        iv_load_policy: 0,
        start: this.start,
        playsinline: 1,
        end: this.end,
        color: 'white',
        disablekb: 1,
        showinfo: 0,
        autohide: 1,
        autoplay: 1,
        controls: 0,
        hl: 'ru',
        rel: 0,
        fs: 0,
      },
      events: {
        'onError': this.onError.bind(this),
        'onReady' : this.onReady.bind(this),
        'onApiChange': this.onApiChange.bind(this),
        'onStateChange' : this.onStateChange.bind(this),
        'onPlaybackRateChange': this.onPlaybackRateChange.bind(this),
        'onPlaybackQualityChange' : this.onPlaybackQualityChange.bind(this),
      }
    });
  }

  onApiChange(thing: any) {
    // console.log('onApiChange: ', thing);
  }

  onError(thing: any) {
    // console.log('onError: ', thing);
    // thing.target.unloadModule()
  }

  onPlaybackQualityChange(thing: any) {
    // console.log('onPlaybackQualityChange: ', thing);  
  }

  onPlaybackRateChange(thing: any) {
    // console.log('onPlaybackRateChange: ', thing);
  }

  onStateChange (thing: any) {
    // console.log('onStateChange: ', thing);
    thing.target.setVolume(100)
    if(thing.data === 0) {
      this.openDialog()
      this.destroyYoutubePlayer()
    }
  }

  onReady (thing: any) {
    // console.log('onReady: ', thing);
    // const duration = this.end - this.start;
    // console.log('duration: ', duration);
    // setTimeout(() => {
    //   this.destroyYoutubePlayer()
    //   this.createYoutubePlayer()
    // }, duration * 1000);
  }

  openDialog() {
    this.zone.run(() => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '553px';
      dialogConfig.height = '622px';
      this.dialog
        .open(DialogPopupComponent,  dialogConfig)
        .afterClosed()
        .subscribe(res => {
          this.quizS.updateUserAnswers(res);
          this.quizS.obs.subscribe(res => {
            if(!res) {
              this.dialog.open(GratzPopupComponent, dialogConfig);
            } else {
              this.videoId = res.videoId
              this.start = res.start
              this.end = res.end  
              this.initYoutubePlayer();
            }
          });
        });
    });
  }
}
