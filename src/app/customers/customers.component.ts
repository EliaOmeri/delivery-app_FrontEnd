import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private userService:UserService,private user : User) { }
  page: number = 1;
  customerList:User[] = [];
  status='';
  query:string ='';

 
  getCustomers(){
    return this.userService.getCustomers().subscribe((response) => {
      this.customerList = response;
    })  
  }

  // searchCustomer() {
  //   if (this.query === '') {
  //    return this.getCustomers();
  //   } else {
  //     return this.customerList.filter(customer =>
  //       customer.firstName.toLowerCase().includes(this.query.toLowerCase()) ||
  //       customer.lastName.toLowerCase().includes(this.query.toLowerCase())
  //     );
      
  //   }
  // }
  // searchCustomer() {
  //   if (this.query === '') {
  //     return this.getCustomers();
  //   } else {
  //     return this.customerList.filter(customer =>
  //       customer.firstName.toLowerCase().includes(this.query.toLowerCase()) ||
  //       customer.lastName.toLowerCase().includes(this.query.toLowerCase()) ||
  //       customer.firstName.toLowerCase().includes(this.query.slice(0, this.query.length).toLowerCase()) ||
  //       customer.lastName.toLowerCase().includes(this.query.slice(0, this.query.length).toLowerCase())
  //     );
  //   }
  // }
  // searchCustomer() {
  //   if (this.query === '') {
  //     return this.getCustomers();
  //   } else {
  //     return this.customerList.filter((customer: User) => {
  //        customer.firstName.toLowerCase().includes(this.query.toLowerCase()) ||
  //              customer.lastName.toLowerCase().includes(this.query.toLowerCase());
  //     });
  //   }
  // }
  

  ngOnInit() {
    this.getCustomers()
  }
}
