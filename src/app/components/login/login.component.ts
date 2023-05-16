import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  constructor(private router: Router,private formBuilder: FormBuilder ) { }

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
console.log(c);
}
get f() { return this.loginForm.controls; }
  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
}
