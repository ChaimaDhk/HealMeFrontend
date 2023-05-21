import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import {ToolbarModule} from "primeng/toolbar";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    ToolbarModule,
    TableModule,
    RatingModule,
    ConfirmDialogModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
