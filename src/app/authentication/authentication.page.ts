import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  authenticate()
  {
    //This is where I need to verify the data...
    var username: string = document.getElementById("name").nodeValue;
    console.log(username);
  }
}
