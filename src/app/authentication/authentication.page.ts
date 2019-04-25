import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Verification } from '../providers/login-data';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  verifyFailed = false;

  constructor(public router: Router, public navCtrl: NavController, public verify: Verification) { }

  ngOnInit() {
  }

  authenticate()
  {
    var form = document.querySelector('form')!;
    var data = new FormData(form);
    var username: string = data.get('name') as string;
    var password: string = data.get('pass') as string;

    if(this.verify.login(username, password))
    {
      this.verifyFailed = false;
      let url = './tabs/settings2/';
      this.router.navigate([url]); 
    }
    else
    {
      this.verifyFailed = true;
    }
  }
}
