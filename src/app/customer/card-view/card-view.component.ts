import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  nameToSearch = '';
  customerList: any;
  pageIndex = 1;
  avatar: string = '';
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.customerService
      .getCustomer()
      .subscribe((data) => (this.customerList = data));
  }
  search() {
    this.customerService.findByName(this.nameToSearch).subscribe((data) => {
      (this.customerList = data), console.log(data);
    });
  }
  moveToOrder(id) {
    this.router.navigate(['information/orders'], {
      queryParams: { id: id },
    });
  }
  moveToEdit(id) {
    this.router.navigate(['information/add'], {
      queryParams: {
        id: id,
        action: 'edit',
      },
    });
  }
}
