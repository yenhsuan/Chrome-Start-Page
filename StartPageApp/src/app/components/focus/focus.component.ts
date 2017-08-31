import { Component, OnInit, Inject} from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  now = moment();
  time = this.now.format('hh:mm A');
  date = this.now.format('dddd, MMMM DD');
  showVideo = true;
  videoId = '';
  videoUrl: SafeResourceUrl;

  constructor(@Inject('data') private data, public sanitizer: DomSanitizer) {
    this.showVideo = this.data.showVideo;
    this.videoId = this.data.videoId;
    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}?autoplay=1&loop=1&mute=1&rel=0&controls=0&showinfo=0&playlist=${this.videoId}&version=3`);
    

    this.data.videoIdChange.subscribe((value) => {
      this.videoId = value;
      this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}?autoplay=1&loop=1&mute=1&rel=0&controls=0&showinfo=0&playlist=${this.videoId}&version=3`);
    });
    this.data.showVideoChange.subscribe((value) => {
      this.showVideo = value; });
  }

  ngOnInit() {
    setInterval( () => { this.updateTime(); }, 1000);
  }

  updateTime() {
    this.now = moment();
    this.time = this.now.format('hh:mm A');
    this.date = this.now.format('dddd, MMMM DD');
  }

}
