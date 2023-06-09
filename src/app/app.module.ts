import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ReservationComponent } from './components/reservation/reservation.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import { DoctorComponent } from './components/doctor/doctor.component';
import {MenuModule} from "primeng/menu";
import {ChartModule} from "primeng/chart";
import { PersonelComponent } from './components/steps/personel/personel.component';
import { RdvComponent } from './components/steps/rdv/rdv.component';
import { PaiementComponent } from './components/steps/paiement/paiement.component';
import { ConfirmationComponent } from './components/steps/confirmation/confirmation.component';
import {StepsModule} from "primeng/steps";
import {CardModule} from "primeng/card";
import{InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    AcceuilComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ReservationComponent,
    DoctorComponent,
    PersonelComponent,
    RdvComponent,
    PaiementComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    DialogModule,
    CalendarModule,
    MenuModule,
    ChartModule,
    StepsModule,
    CardModule,
    InputTextModule,
    InputMaskModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
