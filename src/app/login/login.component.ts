import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    name: '',
    pwd: ''
  };
  loginMsg:string = '';

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    let authenticated = this.restService.isValidUser(this.login.name, this.login.pwd);
    if(authenticated) {
      this.router.navigate(['book-a-ride']);
    } else {
      this.loginMsg = "Wrong Credentials";
    }
  }

}
