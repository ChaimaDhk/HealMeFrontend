import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../signUp.Validator';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder) { }
  registerForm!:FormGroup;
  submitted = false;
  ngOnInit(): void {
       //creation des inputs
       this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm: ['', Validators.required]
      
    }, {
        validator: MustMatch('password', 'confirm')
    });
  }
  signup(c:any){
    this.submitted = true;
     // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
}
   console.log(c);
 }
  
  get f() { return this.registerForm.controls; }
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
