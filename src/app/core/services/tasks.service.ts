import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/shared/models/task.model';

@Injectable()
export class TasksService {

  private readonly TASK_COLLECTION: string = 'tasks';

  constructor(private firestore: AngularFirestore) { }

  public getTaskByUserId(id: string): Observable<Task[]> {
    return this.firestore.collection<Task>(this.TASK_COLLECTION, ref => ref.where('userId', '==', id))
    .snapshotChanges().pipe(map(tasks => tasks.map(task => (({id: task.payload.doc.id, ...task.payload.doc.data()})))));
  }

  public publishTask(task: Task): Promise<void> {
    if (task) {
      const id: string = task.id ?? this.firestore.createId();
      delete task.id;
      return this.firestore.collection<Task>(this.TASK_COLLECTION).doc(id).set(task);
    }
    return Promise.reject('Task is null or undefine');
  }

  public removeTask(id: string): Promise<void> {
    return this.firestore.collection(this.TASK_COLLECTION).doc(id).delete();
  }

  public updateTask(task: Task): Promise<void> {
    if (task?.id) {
      const id: string = task.id;
      delete task.id;
      return this.firestore.collection<Task>(this.TASK_COLLECTION).doc(id).update(task);
    }
    return Promise.reject('Task or task id is null or undefine');
  }

}
