import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  @ViewChild('myImage') myImage: ElementRef;
  customerList: any;
  pageIndex = 1;
  nameToSearch = '';
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomer()
      .subscribe((data) => (this.customerList = data));
  }
  getTotal(item) {
    let result = 0;
    if (item.orders != null) {
      result = item.orders.reduce((total, currentItem) => {
        return total + currentItem.itemCost;
      }, 0);
    }
    return result.toFixed(2);
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
}
