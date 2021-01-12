import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  myForm: FormGroup;
  action: string;
  customerToEdit: any;
  id: any;
  abbreviation;
  constructor(
    private myService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.action = this.route.snapshot.queryParamMap.get('action');
    this.id = this.route.snapshot.queryParamMap.get('id');
    if (this.action == 'add') {
      this.createForm();
    } else if (this.action == 'edit') {
      this.fillForm();
    }
  }
  async fillForm() {
    this.createForm();
    await this.myService.getById(this.id).then(
      (data: any) => (
        (this.myForm = this.fb.group({
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          city: data.city,
          state: data.state.name,
        })),
        // (this.myForm.value.state.abbreviation = data.state.abbreviation)
        (this.abbreviation = data),
        console.log(data)
      )
    );
  }
  createForm() {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
    });
  }
  //
  addNewCustomer() {
    this.myService
      .addCustomer(this.myForm.value)
      .subscribe(() => alert('Add OK'));
    this.router.navigate(['/customer/cardView']);
  }
  updateCustomer() {
    let data = this.myForm.value;

    data.state = this.myService
      .update(this.id, data)
      .subscribe(() => alert('update successful'));
    this.router.navigate(['customer/cardView']);
  }
  deleteCustomer() {
    this.myService.deleteCustomer(this.id).subscribe(() => alert('delete OK'));
    this.router.navigate(['customer/cardView']);
  }
  myAction() {
    this.action = this.route.snapshot.queryParamMap.get('action');
    return this.action;
  }
}
