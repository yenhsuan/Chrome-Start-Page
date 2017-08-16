import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = 1;
  constructor(private dragulaService: DragulaService) { 

    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      console.log(value.slice(1));
      //this.onDrag(value.slice(1));
    });



  }

  ngOnInit() {
  }


  mouseWheelUpFunc(): void {
    if (this.show<3) {
      this.show++;
    }
  }

  mouseWheelDownFunc(): void {
    if (this.show>1) {
      this.show--;
    }
  }
}
