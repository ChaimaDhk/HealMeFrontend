import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {UsersService} from "../../../../../../src/app/services/users.service";
import * as L from 'leaflet';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styles: ['  :host ::ng-deep .p-dialog .product-image {\n' +
  '            width: 150px;\n' +
  '            margin: 0 auto 2rem auto;\n' +
  '            display: block;\n' +
  '        }' + '.field {\n' +
  '  margin-bottom: 20px; /* Adjust the value as per your requirement */\n' +
  '}\n' +
  '\n' +
  '.p-float-label {\n' +
  '  display: flex;\n' +
  '  flex-direction: column;\n' +
  '}\n' +
  '\n' +
  'label {\n' +
  '  margin-bottom: 5px; /* Adjust the value as per your requirement */\n' +
  '}'],
  providers: [MessageService, ConfirmationService]
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public doctorsarray: any[] = [];
  public usersarray: any[] = [];
  public rendezvousarray: any[] = [];
  doctor: any;
  selectedDoctor: any;
  selectedDoctors: any | boolean;
  docdialog: boolean = false;
  submitted: boolean;
  private map: L.Map;
  private Centroid: L.LatLngExpression = [36.81897, 10.16579];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.Centroid,
      zoom: 10
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 8,
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);
  }

  constructor(private userservice: UsersService, private confirmationService: ConfirmationService, private msg: MessageService, private router: Router, private docservice: DoctorService) {
  }


  ngOnInit() {

    this.docservice.getDocs().subscribe((res: any) => {
      console.log(res)
      this.doctorsarray = res;
    });

    this.docservice.getusers().subscribe((res: any) => {
        console.log(res)
        this.usersarray = res;
      }
    );
    this.docservice.getrendezvous().subscribe((res: any) => {
        console.log(res)
        this.rendezvousarray = res;
      }
    );
    this.initMap();
  }

  hideDialog() {
    this.docdialog = false;
    console.log(this.docdialog)
    this.submitted = false;
  }

  editDoctor(doc: any) {
    this.doctor = {...doc};

  }

  deleteDoctor(doc: any) {
    window.alert("Hello");
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this doctor?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.docservice.deleteDoctor(doc.email).subscribe((res: any) => {
          console.log(res)
          if (res["status"] === 200) {
            this.msg.add({key: 'tc', severity: 'success', summary: 'success', detail: 'Docteur supprimé avec succées'});

            this.doctorsarray.filter((e: any) => e.email !== doc.email);

          }

        });
        this.doctor = {};
        this.msg.add({key: 'tc', severity: 'success', summary: 'success', detail: 'Doctor deleted with success'});
      }
    })
  }

  deleteSelectedDoctors() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the selected doctors?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.doctorsarray.filter((e: any) => !this.selectedDoctors.includes(e));
        this.doctor = {};
        this.msg.add({key: 'tc', severity: 'success', summary: 'success', detail: 'Doctors deleted with success'});

      }
    })
  }

  openNew() {
    this.doctor = {};
    this.submitted = false;
    this.docdialog = true;
  }

  addLocationLeat() {

  }


  AddDoctor(doc: any) {
    this.submitted = true;
    this.docservice.adddoctor(doc).subscribe((res: any) => {
      if (res["status"] === 200) {
        this.msg.add({key: "tc", severity: "success", summary: "success", detail: "Docteur Ajouté avec succés"});
        //TODO : send email to the doctor with its details
        setTimeout(() => {
          this.msg.add({key: "tc", severity: "success", summary: "Mail", detail: "un email a été envoyé"});
        }, 6)
      }
    })
    this.docdialog = false;

  }


}
