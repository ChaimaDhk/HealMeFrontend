import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  constructor(private router: Router,private formBuilder: FormBuilder ,private userService:UsersService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  login(c:any){
  this.submitted = true;
  // stop here if form is invalid
if (this.loginForm.invalid) {
 return;
}
const email = this.loginForm.value.mail;
const password = this.loginForm.value.password;

this.userService.Login(email,password).subscribe((res:any)=>{
  if(res["status"]===200){
    this.router.navigate([''])
  }else{
    //TODO : need to add a toast here from primeNg
    alert(res["message"]);
  }
});

console.log(c);
}
get f() { return this.loginForm.controls; }
  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
}
