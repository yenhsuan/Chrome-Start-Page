import { Component, OnInit, Inject } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject('gcRouter') private gcRouter) { }

  ngOnInit() {
  }

  triggerFavPanel(): void {
    $('#favSideMenu').sidebar('toggle');
  }
}
