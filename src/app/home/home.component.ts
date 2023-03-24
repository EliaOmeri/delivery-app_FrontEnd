import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  // constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.getPublicContent().subscribe({
  //     next: data => {
  //       this.content = data;
  //     },
  //     error: err => {
  //       this.content = JSON.parse(err.error).message;
  //     }
  //   });
  // }
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  showModeratorBoard = false;
  firstName?: string;
  lastName?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  } 
}
