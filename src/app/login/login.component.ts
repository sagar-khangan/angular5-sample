import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginServiceService} from '../login-service.service'
// import { NgForm } from '@angular/forms/src/directives/ng_form';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService],
  
})
export class LoginComponent implements OnInit {
  show  = false;
  profile :Object=[];
  // username: String ='';
  user= Object;
  updateSpinner(): boolean {
    return this.show ? this.show : false;
  }

  submitForm(f: NgForm) {
    console.log(this.loginService.getUser(f.value).subscribe(data => {this.profile = data}));
    this.loginService.getUser(f.value).subscribe(
      data => console.log(this.profile = data),
      err => console.log(err),
      () => console.log('Request Completed')
   ); 

    // this.router.navigate(['/dashboard']);  
  }

  ngOnInit(): void {
    if(this.show === false) {
      this.show = true;
    }
  };
  constructor(private router: Router,private loginService: LoginServiceService) { }



}
