import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { DiseaseComponent } from './Components/disease/disease.component';
import { ProcureComponent } from './Components/Procuree/procure/procure.component';
import { SalesComponent } from './Components/Sales/sales.component';
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';

const routes: Routes = [
  {path : 'dashboard', component : DashboardComponent},
  // {path : 'customer', component : CustomerComponent},
  {path: 'customer',component:NewCustomerComponent},
  {path: 'procure', component:ProcureComponent},
  {path: 'disease', component:DiseaseComponent},
  {path: 'selling-system', component: SalesComponent},
  {path: 'disease', component:DiseaseComponent},
  {path: 'selling-system', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
