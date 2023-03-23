import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private userService:UserService) { }
  page: number = 1;
  customerList:User[] = [];


  getCustomers(){
    return this.userService.getCustomers().subscribe((response) => {
      console.log(response)
      this.customerList = response;
    })
  }


  ngOnInit():void {
    this.getCustomers()
  }


}
