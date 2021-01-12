import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    let user = {
      email: this.email,
      password: this.password,
    };
    if ((this.email == 'admin', this.password == '123')) {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['customer/cardView']);
      // localStorage.removeItem('user');
      alert('Login Successful');
    } else {
      alert('login failed');
    }
  }
}
