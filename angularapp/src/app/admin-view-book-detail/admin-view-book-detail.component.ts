import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-view-book-detail',
  templateUrl: './admin-view-book-detail.component.html',
  styleUrls: ['./admin-view-book-detail.component.css']
})
export class AdminViewBookDetailComponent implements OnInit {

  id:any

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      console.log(this.id);
  });
  }

}
