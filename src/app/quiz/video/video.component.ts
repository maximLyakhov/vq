import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { VideoService } from './service/video.service';
import { QuizService } from '../service/quiz.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './video.component.html',
  selector: 'app-video',
})
export class VideoComponent implements OnInit, OnDestroy {
  constructor(
    private readonly appService: QuizService,
    private readonly vidService: VideoService,
    private readonly cd: ChangeDetectorRef,
  ){}

  ngOnInit() {
    this.appService.obs.subscribe(res => {
      this.vidService.videoId = res.videoId
      // this.vidService.start = res.start
      // this.vidService.end = res.end
      this.cd.detectChanges()
    })
    this.vidService.initYoutubePlayer()
  }

  ngOnDestroy() {
    this.vidService.destroyYoutubePlayer()
  }
}
