import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css'],
})
export class CustomerInformationComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  action: any;
  @ViewChild(AddCustomerComponent) addComponent: any;
  ngOnInit(): void {
    // console.log(this.addComponent);
  }
  onActivate(componentRef) {
    if (componentRef.myAction() == 'add') {
      this.action = 'New Customer';
    } else {
      this.action = 'Edit Customer';
    }
  }
}
