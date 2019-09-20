import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RegisterComponent } from './register/register.component';
import { SummaryComponent } from './summary/summary.component';
import { LoadDataComponent } from './load-data/load-data.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'departments', component: DepartmentListComponent},
  {path:'employees',component: EmployeeListComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'summary',component: SummaryComponent},
  {path:'welcome/:email',component: WelcomeComponent},
  {path:'todo-list',component: TodoListComponent},
  {path:'loadData',component: LoadDataComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent];
