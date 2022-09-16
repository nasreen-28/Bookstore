import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  userId: any;
  constructor() {}
  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
  }

  logout() {
    sessionStorage.clear();
  }
}
