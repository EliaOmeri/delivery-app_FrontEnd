import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBox = false;
  showModeratorBoard = false;
  firstName?: string;
  lastName?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBox = this.roles.includes('ROLE_ADMIN');
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  } 
}
