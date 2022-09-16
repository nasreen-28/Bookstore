import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  adminName: any;
  constructor() {}

  ngOnInit(): void {
    this.adminName = sessionStorage.getItem('adminName');
  }
}
