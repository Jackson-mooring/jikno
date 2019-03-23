import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  animations: [
    trigger('showHideBar', [
      state('in', style({
        left: '0',
      })),
      state('out', style({
        left: '-300px',
      })),
      transition('* => *', [
        animate('200ms ease-in-out'),
      ])
    ])
  ],
})
export class SidebarComponent implements OnInit {
  barIn = false;

  constructor() { }

  ngOnInit() {
  }

}
