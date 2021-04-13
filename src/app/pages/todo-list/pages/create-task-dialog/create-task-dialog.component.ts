import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/shared/models/task.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent {

  name: string = '';
  description: string = '';

  constructor(
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  public createTask(): Task {
    const user: User = this.data?.user;
    return {
      validate: false,
      userId: user?.id,
      name: this.name,
      description: this.description,
      date: Date.now()
    };
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
