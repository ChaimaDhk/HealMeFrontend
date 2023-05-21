import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
     


    constructor( private router: Router) { }

    ngOnInit() { 
       
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

}
