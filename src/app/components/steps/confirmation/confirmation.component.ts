import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers:[MessageService]
})
export class ConfirmationComponent implements OnInit {

  nom:string="";
  prenom:string="";
  email:string="";
  date7:string="";


  constructor(private router:Router,private docservice:DoctorsService,private msg:MessageService) { }

  ngOnInit(): void {
     this.email=localStorage.getItem('emaildoctor')||"";
      this.nom=localStorage.getItem('nom')||"";
      this.prenom=localStorage.getItem('prenom')||"";
      this.date7=localStorage.getItem('date7')||"";
  }
  complete(){
    let  rdv ={
      userId : this.nom+ " "+this.prenom,
      doctorId: this.email,
      date: this.date7,
      time: this.date7,
    }
    this.docservice.setRendezvous(rdv).subscribe((data:any)=>{
      console.log(data);
        switch(data["status"]){
          case 200:
            this.msg.add({key:'tc',severity:'success', summary:'Success', detail:'Rendez-vous ajouté avec succès'});
            break;
          case 400:
            this.msg.add({key:'tc',severity:'error', summary:'Error', detail:'Rendez-vous non ajouté'});
            break;
          case 401:
            this.msg.add({key:'tc',severity:'error', summary:'Error', detail:'Docteur n est pas disponible '});    
        }
    })
  }
  prevPage(){
    this.router.navigate(['rendezvous/paiement']);
  }

}
