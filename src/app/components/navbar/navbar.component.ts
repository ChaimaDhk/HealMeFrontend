import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userConnect:any;
  isDisplay:any;
  constructor() { }

  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");

    if (this.userConnect.role != null) {
      this.isDisplay = !this.isDisplay;
    }
  }

}
