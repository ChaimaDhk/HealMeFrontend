import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paymentInformation ={
    cardholderName: '',
    cardholderNumber: '',
    date: '',
    cvv: ''
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nextPage() {
    if (this.paymentInformation.cardholderName && this.paymentInformation.cardholderNumber && this.paymentInformation.date && this.paymentInformation.cvv) {
        this.router.navigate(['rendezvous/confirmation']);
    }
}

prevPage() {
    this.router.navigate(['rendezvous/rdv']);
}

}
