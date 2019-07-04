import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navLinks = [
    {
      label: 'Users',
      link: './users',
      index: 0
    }, {
      label: 'Sports',
      link: './sports',
      index: 1
    },
    {
      label: 'Devices',
      link: './devices',
      index: 2
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
