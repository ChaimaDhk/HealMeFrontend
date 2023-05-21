import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[MessageService]
})
export class ReservationComponent implements OnInit {
  visibility:boolean=false ;
  items: MenuItem[]= [] ;
  activeIndex: number = 0;
  doctors:any;
  constructor(private router:Router,private docservice:DoctorsService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.docservice.getAllDoctors().subscribe((data)=>{
      this.doctors=data;
      console.log(this.doctors);
    })
    this.items=[{
      label:'Personel',
    
      routerLink:'personel',
      command:()=>{
        this.router.navigate(['/rendezvous/personel']);
      }
    },
      {
        label:'Rendez-vous',
        routerLink:'rdv',
        command:()=>{
          this.router.navigate(['/rendezvous/rdv']);
        }
      },
      {
        label:'Paiement',
        routerLink:'paiement',
        command:()=>{
          this.router.navigate(['/rendezvous/paiement']);
        }
      },{
        label:'Confirmation',
        routerLink:'confirmation',
        command:()=>{ 
          this.router.navigate(['/rendezvous/confirmation']);
        }
      }];
      this.activeIndex=0;
  }
  
  showDialog(doc:any){
    localStorage.setItem('emaildoctor',doc.email);
    this.visibility=true;
  }

 // popup avec calendrier
}
