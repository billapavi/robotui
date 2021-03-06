import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, DefaultValueAccessor } from '@angular/forms';

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
import { SummaryComponent } from './summary/summary.component';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CusdateComponent } from './cusdate/cusdate.component';
import { mycustomclass } from './user/user.service';
import { LoadDataComponent } from './load-data/load-data.component';
import { DatePipe } from '@angular/common';
import { BsDropdownModule, BsDropdownDirective } from 'ngx-bootstrap/dropdown';



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
    SummaryComponent,
    CusdateComponent,
    LoadDataComponent,
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [mycustomclass,DatePipe,BsDropdownDirective,DefaultValueAccessor],
  bootstrap: [AppComponent]
})
export class AppModule { }
