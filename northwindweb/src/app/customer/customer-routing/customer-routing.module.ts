import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CommonModule } from '@angular/common';

const customerRoutes : Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ]
  },
  {
    path:'', redirectTo: 'customer', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomerRoutingModule { }
