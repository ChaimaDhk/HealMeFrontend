import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import Swal from "sweetalert2";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  userConnect:any;
  constructor() { }

  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
  }
popup() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'la Consultation est bien terminée !',
    showConfirmButton: false,
    timer: 1500
  })
  //supprimer le rendez vous du base de donnée
}
}
