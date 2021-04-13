import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;

  @Output() update: EventEmitter<Task> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();

  constructor(private snackBar: MatSnackBar) { }

  public updateTask(): void {
    this.snackBar.open(`The task '${this.task.name}' was updated.`, 'ok', { duration: 2000 });
    this.update.emit(this.task);
  }

  public editTask(): void {
    this.task.edit = !this.task.edit;
    this.updateTask();
  }

  public validTask(): void {
    this.task.validate = !this.task.validate;
    this.updateTask();
  }

  public removeTask(): void {
    this.remove.emit();
    this.snackBar.open(`The task '${this.task.name}' was removed.`, 'ok', { duration: 2000 });
  }

}
