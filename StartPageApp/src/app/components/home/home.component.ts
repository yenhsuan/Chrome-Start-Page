import { Component, OnInit, HostListener, Inject, AfterViewInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  show = 1;
  iconData = [];
  changingPage = false;

  // For adding new icon data-binding-----

  newIconTitle = '';
  newIconURL = '';
  newIconIconURL = '';
  newIconColor = 'black';
  newIconShowIconCase = false;

  // -------------------------------------

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
    $('.ui.checkbox').checkbox();
  }

  ngAfterViewInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  }

  mouseWheelUpFunc(): void {
    if (this.show < 3) {
      if (this.changingPage === false) {
        this.changingPage = true;
        this.show++;
        setTimeout( () => { this.changingPage = false; } , 200);
      }
    }
  }

  mouseWheelDownFunc(): void {
    if (this.show > 1) {
      if (this.changingPage === false) {
        this.changingPage = true;
        this.show--;
        setTimeout( () => { this.changingPage = false; } , 200);
      }
    }
  }

  showAddNewIconMenu(): void {
    $('#addNewIconMenu').modal('show');
  }

  fileChangeEvent(fileInput: any) {
      console.log('111');
      console.log(fileInput);
      if (fileInput.target.files && fileInput.target.files[0]) {
        console.log('111');
        const reader = new FileReader();

        reader.onload = function (e : any) {
            $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(fileInput.target.files[0]);
      }
  }

}
