import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {DoctorComponent} from "./components/doctor/doctor.component";
import { PersonelComponent } from './components/steps/personel/personel.component';
import { RdvComponent } from './components/steps/rdv/rdv.component';
import { PaiementComponent } from './components/steps/paiement/paiement.component';
import { ConfirmationComponent } from './components/steps/confirmation/confirmation.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: '', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'rendezvous', component: ReservationComponent,children:[
      {path:'personel',component:PersonelComponent},
      {path:'rdv',component:RdvComponent},
      {path:'paiement',component:PaiementComponent},
      {path:'confirmation',component:ConfirmationComponent}
    ]
  },
  { path: 'doctor', component: DoctorComponent },
  { path: 'login', component: LoginComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
