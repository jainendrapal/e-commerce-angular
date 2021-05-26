import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import { home} from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-test-self';
  
  loginForm: FormGroup;
  login = {
     email:'',
     password:''
  };

  submitted =  false;
  constructor(){
  this.doLogin();
  }

  doLogin():void{
    this.loginForm = new FormGroup({
      'email': new FormControl(this.login.email, [Validators.required]),
      'password': new FormControl(this.login.password,[Validators.required])
    });  
  }

  onSubmit(): void{
    console.log(this.loginForm);
    this.submitted = true;
  }
}

