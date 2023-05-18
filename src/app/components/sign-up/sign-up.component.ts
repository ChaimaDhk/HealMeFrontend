import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../signUp.Validator';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[MessageService]
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router,private msg:MessageService,private userservice:UsersService,private formBuilder:FormBuilder) { }
  registerForm!:FormGroup;
  submitted = false;
  ngOnInit(): void {
       //creation des inputs
       this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
         surname: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
         phone: ['', [Validators.required, Validators.minLength(8)]],
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
}else{
    const user ={
      name:this.registerForm.value.name,
      surname:this.registerForm.value.surname,
      email:this.registerForm.value.mail,
      phone:this.registerForm.value.phone,
      password:this.registerForm.value.password,
      role:"Patient"

    }
    this.userservice.signUp(user).subscribe((res:any)=>{
      console.log("*********");
      console.log(res);
      if(res["status"]===200){
        this.msg.add({key:'tc',severity:'success',summary:'success',detail:'Inscription avec success'});
        localStorage.setItem('user',JSON.stringify(user));
        this.router.navigate(['']);

      }else{
        this.msg.add({key:'tc',severity:'error',summary:'erreur',detail:'Inscription échouée'});
      }
    });
  }
 }

  get f() { return this.registerForm.controls; }
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
