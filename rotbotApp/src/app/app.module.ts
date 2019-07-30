import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAppComponent } from './hello-app/hello-app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HelloAppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    routingComponents,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    TodoListComponent,
    NavBarComponent,
    RegisterComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
