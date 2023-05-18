import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";
import {UsersService} from "../../services/users.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  constructor(private msg:MessageService,private router: Router,private formBuilder: FormBuilder ,private userService:UsersService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  login(c:any){
    window.alert("Hello");
  this.submitted = true;
  // stop here if form is invalid
if (this.loginForm.invalid) {
 return;
}
const email = this.loginForm.value.mail;
const password = this.loginForm.value.password;


this.userService.Login(email,password).subscribe((res:any)=>{
  if(res["status"]===200){
     this.msg.add({key:'tc',severity:'success',summary:'success',detail:'Login avec success'});
    window.alert("Hello");
    this.router.navigateByUrl('');
  }else{
    //TODO : need to add a toast here from primeNg
    this.msg.add({key:'tc',severity:'error',summary:'erreur',detail:'Login échouée'});
  }
});

}
get f() { return this.loginForm.controls; }
  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
}
