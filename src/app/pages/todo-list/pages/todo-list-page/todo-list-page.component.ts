import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { Task } from 'src/app/shared/models/task.model';
import { User } from 'src/app/shared/models/user.model';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit, OnDestroy {

  user: User;
  tasks: Task[];

  _user: Subscription;
  _tasks: Subscription;

  constructor(private authService: AuthService, private tasksService: TasksService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this._user = this.authService.user$.subscribe(user => this.user = user);
    this._tasks = this.authService.user$.pipe(switchMap(user =>
      this.tasksService.getTaskByUserId(user.id))).subscribe(tasks => this.tasks = tasks);
  }

  public createTask(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      width: '50%',
      data: { user: this.user }
    });
    dialogRef.afterClosed().pipe(first()).subscribe(task => {
      if (task) {
        this.tasksService.publishTask(task);
      }
    });
  }

  public update(task: Task): void {
    this.tasksService.updateTask(task);
  }

  public remove(id: string): void {
    this.tasksService.removeTask(id);
  }

  public ngOnDestroy(): void {
    this._user.unsubscribe();
    this._tasks.unsubscribe();
  }

}
