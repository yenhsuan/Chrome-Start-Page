import { Component, OnInit, Inject } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = 1;
  iconData = [];

  constructor(private dragulaService: DragulaService, @Inject('data') private data) {

    // Get iconArray reference form data service
    this.iconData = this.data.iconArray;

    // Dragula drop event listener
    dragulaService.drop.subscribe(( divObj: Array<object>) => {
      const iconDivObj = divObj.slice(1)[1]['children'];

      const iconArrayUpdated = [];
      for (let i = 0; i < iconDivObj.length; i++) {
        const idx = iconDivObj[i]['id'].charAt(4);
        iconArrayUpdated.push(this.iconData[idx]);
      }

      this.data.iconArray = iconArrayUpdated;
      this.data.updateIconsArrayToLocalStorage();
      this.iconData = iconArrayUpdated;
    });

    // Right Click Menu
    $.contextMenu({
      selector: '.iconDiv',
      items: {
          edit: {
            name: 'Edit',
            icon: 'fa-pencil-square-o',
            callback: (key: any, opt: any) => {
              console.log(opt)
            }
          },
          del: {name: 'Delete', icon: 'fa-trash-o',
            callback: (key: any, opt: any) => {
              const target = opt['$trigger'][0]['id'].charAt(7);
              this.iconData.splice(target, 1);
              this.data.updateIconsArrayToLocalStorage();
            }
          },
          cancel: {
            name: 'Cancel',
            callback: (key: any, opt: any) => {
              // Do nothing
            }
          }
      }
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
