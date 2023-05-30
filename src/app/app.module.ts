import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { ProcureComponent } from './Components/Procuree/procure/procure.component';
import { DiseaseComponent } from './Components/disease/disease.component';
import { SalesComponent } from './Components/Sales/sales.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
   
    ProcureComponent,
    DiseaseComponent,
    SalesComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
