import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateTaskDialogComponent } from './pages/create-task-dialog/create-task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    TodoListPageComponent,
    CreateTaskDialogComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
