import { Component, OnInit, Inject } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Subscription} from 'rxjs/Subscription';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = 1;
  iconSubscription: Subscription;
  iconData = [];


  constructor(private dragulaService: DragulaService, @Inject('data') private data) {

    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      console.log(value.slice(1));
      // this.onDrag(value.slice(1));
    });

    this.iconSubscription = this.data.subscribeIconData().subscribe( (ary: Array<object>) => {
      this.iconData = ary;
    });
  }

  ngOnInit() {
  }


  mouseWheelUpFunc(): void {
    if (this.show < 3) {
      this.show++;
    }
  }

  mouseWheelDownFunc(): void {
    if (this.show > 1) {
      this.show--;
    }
  }
}
