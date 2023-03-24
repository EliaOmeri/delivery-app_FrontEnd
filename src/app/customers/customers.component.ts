import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private userService: UserService, private user: User) { }
  page: number = 1;
  customerList: User[] = [];
  status = '';
  query: string = '';
  selectedOption: string = '';

  getCustomers() {
    return this.userService.getCustomers().subscribe((response) => {
      this.customerList = response;
    })
  }

  searchCustomer() {
    let filteredList = this.customerList;

    if (this.selectedOption === 'active' || !this.selectedOption) {
      filteredList = filteredList.filter(customer => customer.active);
    } else if (this.selectedOption === 'inactive') {
      filteredList = filteredList.filter(customer => !customer.active);
    }

    if (this.query !== '') {
      filteredList = filteredList.filter(customer =>
        customer.firstName.toLowerCase().includes(this.query.toLowerCase())
      );
    }

    return filteredList;
  }

  ngOnInit() {
    this.getCustomers()
  }
}
