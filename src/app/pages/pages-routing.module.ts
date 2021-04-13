import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsLoggedGuard } from "../core/guards/is-logged.guard";
import { LoginPageComponent } from "./login/login-page/login-page.component";
import { TodoListPageComponent } from "./todo-list/todo-list-page/todo-list-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'todolist', component: TodoListPageComponent, loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule), canActivate: [ IsLoggedGuard ] },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
