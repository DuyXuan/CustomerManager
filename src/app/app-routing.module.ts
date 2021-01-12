import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customer/customer-information/add-customer/add-customer.component';
import { CardViewComponent } from './customer/card-view/card-view.component';
import { CustomerDetailComponent } from './customer/customer-information/customer-detail/customer-detail.component';
import { CustomerInformationComponent } from './customer/customer-information/customer-information.component';
import { CustomerOrderComponent } from './customer/customer-information/customer-order/customer-order.component';

import { CustomerComponent } from './customer/customer.component';
import { ListViewComponent } from './customer/list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './service/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: 'cardView',
        component: CardViewComponent,
      },
      {
        path: 'listView',
        component: ListViewComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'information',
    component: CustomerInformationComponent,
    children: [
      {
        path: 'detail',
        component: CustomerDetailComponent,
      },
      {
        path: 'orders',
        component: CustomerOrderComponent,
      },

      {
        path: 'add',
        component: AddCustomerComponent,
        canActivate: [LoginGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [CustomerComponent];
