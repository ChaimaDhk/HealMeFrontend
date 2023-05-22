import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  personalInformation: any;

    submitted: boolean = false;
     nom: any="";
      prenom: any="";
      email:any=""


  personnelForm!:FormGroup;
    constructor( private router: Router,private formBuilder:FormBuilder) { }

    ngOnInit() {
      //creation des inputs
      this.personnelForm = this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    });
    }
    nextPage() {

      if(this.email &&  this.nom && this.prenom){
        localStorage.setItem('nom',this.nom);
        localStorage.setItem('prenom',this.prenom);
        this.router.navigate(['rendezvous/rdv']);

        return;
      }



        this.submitted = true;
    }
  get f() { return this.personnelForm.controls; }

}
