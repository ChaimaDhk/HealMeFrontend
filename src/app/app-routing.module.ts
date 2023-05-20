import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ReservationComponent} from "./components/reservation/reservation.component";

const routes: Routes = [
  { path: 'signup', component:SignUpComponent },
  { path: '', component:AcceuilComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'about', component:AboutComponent},
  { path: 'rendezvous', component:ReservationComponent},
  { path: 'login', component:LoginComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
