import { Component, OnInit } from '@angular/core';
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
  constructor() {
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
