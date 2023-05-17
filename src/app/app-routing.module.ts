import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";

const routes: Routes = [
  { path: 'signUp', component:SignUpComponent },
  { path: 'acceuil', component:AcceuilComponent},
  { path: 'login', component:LoginComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
