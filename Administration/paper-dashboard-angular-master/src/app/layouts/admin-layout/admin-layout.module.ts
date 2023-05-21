import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {BrowserModule} from "@angular/platform-browser";
import {GMapModule} from 'primeng/gmap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    FileUploadModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    GMapModule
  ],
  declarations: [
    DashboardComponent,

  ]
})

export class AdminLayoutModule {
}
