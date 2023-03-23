import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './costumer/admin/admin.component';
import { UserComponent } from './costumer/user/user.component';
import { authInterceptorProviders } from './Authorization/auth.interceptor';
import { CustomersComponent } from './customers/customers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from './model/user.model';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    UserComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule  

    ],
  providers: [authInterceptorProviders
  ,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
