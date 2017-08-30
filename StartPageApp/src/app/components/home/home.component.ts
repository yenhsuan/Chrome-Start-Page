import { Component, OnInit, HostListener, Inject, AfterViewInit, ViewContainerRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { defaultWebsite } from '../../defaultWeb.config';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare let $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Arr = Array;
  colorMap = {
    red            : '#D92B2F',
    orange         : '#F0712C',
    yellow         : '#F9BC2E',
    olive          : '#B5CA31',
    green          : '#2DB84B',
    teal           : '#1CB5AC',
    blue           : '#2987CD',
    violet         : '#643CC6',
    purple         : '#A23BC5',
    pink           : '#DE3E96',
    brown          : '#A46743',
    grey           : '#767676',
    black          : '#1B1C1D',
    white          : '#EEEEEE'
  };


  iconData = [];
  defaultWebsiteData = [];
  show = 1;
  lenShow: number;
  changingPage = false;

  editMode = false;
  editIndex = -1;

  // For adding new icon data-binding-----

  newIconTitle = '';
  newIconURL = '';
  newIconIconURL = '';
  newIconBgColor = 'blue';
  newIconShowIconCase = false;
  newIconShowTransparentIconCase = false;

  // -------------------------------------

  constructor(private dragulaService: DragulaService, @Inject('data') private data, public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);


    // Get iconArray reference form data service
    this.iconData = this.data.iconArray;
    this.defaultWebsiteData = defaultWebsite;
    this.lenShow = Math.ceil(this.data.iconArray.length / 15);

    // Dragula drop event listener
    dragulaService.drop.subscribe(( divObj: Array<object>) => {
      console.log(divObj.slice(1));
      const iconDivObj = divObj.slice(1)[1]['children'];
      const iconArrayUpdated = [];
      for (let i = 0; i < iconDivObj.length; i++) {
        const idx = iconDivObj[i]['id'].substring(4);
        iconArrayUpdated.push(this.iconData[idx]);
      }

      this.data.iconArray = iconArrayUpdated;
      this.data.updateIconsArrayToLocalStorage();
      this.iconData = iconArrayUpdated;
      this.lenShow = Math.ceil(this.data.iconArray.length / 15);
    });


    // Right Click Menu
    $.contextMenu({
      selector: '.iconDiv',
      items: {
          edit: {
            name: 'Edit',
            icon: 'fa-pencil-square-o',
            callback: (key: any, opt: any) => {
              const target = opt['$trigger'][0]['id'].substring(7);
              this.newIconTitle = this.iconData[target]['name'];
              this.newIconURL = this.iconData[target]['url'].substring(7);
              this.newIconIconURL = this.iconData[target]['iconUrl'];
              this.newIconBgColor = this.iconData[target]['bgColor'];
              this.newIconShowIconCase = this.iconData[target]['showIconCase'];
              this.newIconShowTransparentIconCase = this.iconData[target]['showTransparentIconCase'];

              this.editMode = true;
              this.editIndex = target;
              $('#addNewIconMenu').modal('show');
            }
          },
          del: {name: 'Delete', icon: 'fa-trash-o',
            callback: (key: any, opt: any) => {
              const target = opt['$trigger'][0]['id'].substring(7);
              this.iconData.splice(target, 1);
              this.lenShow = Math.ceil(this.data.iconArray.length / 15);
              if (this.show !== 1 && this.show > this.lenShow) {
                this.show--;
              }

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
    $('#addIconTriggerBtn').popup({
      inline: true,
      on    : 'click'
    });
    // console.log(defaultWebsite);
  }

  ngAfterViewInit() {
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  // }

  mouseWheelDownFunc(): void {

    const len = this.iconData.length;
    if ( this.show * 15 < len) {
      if (this.changingPage === false) {
        this.changingPage = true;
        this.show++;
        setTimeout( () => { this.changingPage = false; } , 650);
      }
    }
  }

  mouseWheelUpFunc(): void {
    if (this.show > 1) {
      if (this.changingPage === false) {
        this.changingPage = true;
        this.show--;
        setTimeout( () => { this.changingPage = false; } , 650);
      }
    }
  }

  showAddNewIconMenu(): void {
    $('#addIconTriggerBtn').popup('hide');
    $('#addNewIconMenu').modal('show');
  }

  showAddNewDefaultIconMenu(): void {
    $('#addIconTriggerBtn').popup('hide');
    $('#addNewDefaultIconMenu').modal('show');
  }


  addNewIcon(): void {
    const newIcon = {
        name: this.newIconTitle,
        url: 'http://' + this.newIconURL,
        iconUrl: this.newIconIconURL,
        bgColor: this.newIconBgColor,
        corner: 0,
        showIconCase: this.newIconShowIconCase,
        showTransparentIconCase: this.newIconShowTransparentIconCase
    };

    if (this.editMode) {
      this.iconData[this.editIndex] = newIcon;
      this.editMode = false;
    } else {
      this.iconData.push(newIcon);
    }
    this.lenShow = Math.ceil(this.data.iconArray.length / 15);
    this.data.updateIconsArrayToLocalStorage();
    this.resetAddNewIconForm();
  }

  addNewDefaultIcon(index): void {
    this.data.iconArray.push(JSON.parse(JSON.stringify(defaultWebsite[index])));
    this.lenShow = Math.ceil(this.data.iconArray.length / 15);
    this.data.updateIconsArrayToLocalStorage();
  }

  resetAddNewIconForm(): void {
    this.newIconTitle = '';
    this.newIconURL = '';
    this.newIconIconURL = '';
    this.newIconBgColor = 'blue';
    this.newIconShowIconCase = false;
    this.newIconShowTransparentIconCase = false;
  }

  showSuccess() {
    this.toastr.success('Successfully added website!', 'Success!');
  }



  // fileChangeEvent(fileInput: any) {
  //     console.log('111');
  //     console.log(fileInput);
  //     if (fileInput.target.files && fileInput.target.files[0]) {
  //       console.log('111');
  //       const reader = new FileReader();

  //       reader.onload = function (e : any) {
  //           $('#preview').attr('src', e.target.result);
  //       }

  //       reader.readAsDataURL(fileInput.target.files[0]);
  //     }
  // }

}
