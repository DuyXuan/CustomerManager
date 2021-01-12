import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

var token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTUzNzcxNTMyNSwiZXhwIjoxNTM3NzE4OTI1LCJuYmYiOjE1Mzc3MTUzMjUsImp0aSI6IlBKWVhnSkVyblQ0WjdLTDAiLCJzdWIiOjYsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.1vz5lwPlg6orzkBJijsbBNZrnFnUedsGJUs7BUs0tmM';

var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + token,
});
const httpOptions = {
  headers: headers_object,
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  myApi = 'http://localhost:3000/api/customers';
  getCustomer(): Observable<any> {
    return this.http.get(this.myApi);
  }
  addCustomer(customer: any): Observable<any> {
    return this.http.post(this.myApi, customer);
  }
  findByName(firstName: string): Observable<any> {
    return this.http.get(`${this.myApi}?firstName=${firstName}`);
  }
  async getById(id: any) {
    let customerList = [];
    customerList = await this.getCustomer().toPromise();
    customerList = customerList.filter((item) => item.id == id)[0];

    return customerList;
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(this.myApi + '/' + id, data, httpOptions);
  }
  deleteCustomer(id: any) {
    return this.http.delete(this.myApi + '/' + id, httpOptions);
  }
}
