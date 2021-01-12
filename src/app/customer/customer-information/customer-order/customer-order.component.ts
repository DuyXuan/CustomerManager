import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css'],
})
export class CustomerOrderComponent implements OnInit {
  name;
  id: any;
  orderItem: any;
  customerList: any = [];
  totalCost: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myService: CustomerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getData();
    // this.getOrder();
  }
  async getData() {
    this.customerList = await this.myService.getCustomer().toPromise();
    this.customerList = this.customerList.filter((item) => {
      return item.id == this.id;
    });
    this.orderItem = this.customerList.map((item) => {
      return item.orders;
    })[0];
    this.totalCost = this.orderItem.reduce((total, item) => {
      return total + item.itemCost;
    }, 0);
    this.totalCost = this.totalCost.toFixed(2);
  }
  moveToCustomer() {
    this.router.navigate(['customer/cardView']);
  }
}
