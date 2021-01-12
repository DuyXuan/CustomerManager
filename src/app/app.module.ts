import { sort } from './sort.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CardViewComponent } from './customer/card-view/card-view.component';
import { ListViewComponent } from './customer/list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCustomerComponent } from './customer/customer-information/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerInformationComponent } from './customer/customer-information/customer-information.component';
import { CustomerDetailComponent } from './customer/customer-information/customer-detail/customer-detail.component';
import { CustomerOrderComponent } from './customer/customer-information/customer-order/customer-order.component';

import { LoginGuard } from './service/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    routingComponent,
    LoginComponent,
    CardViewComponent,
    ListViewComponent,
    AddCustomerComponent,
    CustomerInformationComponent,
    CustomerDetailComponent,
    CustomerOrderComponent,

    sort,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
