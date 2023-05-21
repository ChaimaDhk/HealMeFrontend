import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  date7: Date=new Date();
  constructor(private router:Router) { }

  ngOnInit(): void {
 
  }
  nextPage(){
    if(this.date7){
      localStorage.setItem('date7',this.date7.toString());
      this.router.navigate(['rendezvous/paiement']);
    }
  }
}
