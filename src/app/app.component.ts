import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLogout = false;
  @ViewChild(CustomerComponent) customer: CustomerComponent;
  myImgElement: any;
  title = 'demoFinal';
  disable = false;
  /**
   *
   */
  constructor(private router: Router) {}
  checkLogin() {
    if (localStorage.getItem('user')) {
      let name = JSON.parse(localStorage.getItem('user'));
      this.showLogout = true;
      this.disable = true;
      return `${name.email}`;
    } else {
      return 'Login';
    }
  }
  logout() {
    localStorage.removeItem('user');

    this.router.navigate(['login']);
    this.showLogout = false;
  }
}
