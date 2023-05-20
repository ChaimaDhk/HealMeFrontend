import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

 // popup avec calendrier
  popup() {
    Swal.fire({
      title: 'Choisissez une date et une heure',
      html: `
    <input type="date" id="date" style="
      height: 30px;
      width: 200px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px;
      margin: 5px;
      background-color: #f2f2f2;
      color: #333;
    ">
    <input type="time" id="time" style="
      height: 30px;
      width: 200px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px;
      margin: 5px;
      background-color: #f2f2f2;
      color: #333;
    ">
  `,
      confirmButtonText: 'Valider',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      focusConfirm: false,
      preConfirm: () => {
        const date = (<HTMLInputElement>document.getElementById('date')).value;
        const time = (<HTMLInputElement>document.getElementById('time')).value;
        if (!date || !time) {
          Swal.showValidationMessage('Veuillez choisir une date et une heure');
        }
        return { date: date, time: time };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Vous avez choisi la date .. et l'heure ...`
        });
      }
    });}
}
