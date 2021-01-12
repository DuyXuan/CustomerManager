import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  input: any;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  // moveToInfo() {
  //   this.router.navigate(['information/add']);
  // }
  moveToAdd() {
    this.router.navigate(['information/add'], {
      queryParams: { action: 'add' },
    });
  }
}
