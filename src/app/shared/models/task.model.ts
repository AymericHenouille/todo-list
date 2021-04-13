export enum TaskStatus {
  TODO,
  DONE
}

export interface Task {
  id?: string;
  edit?: boolean;
  validate: boolean;
  userId: string;
  name: string;
  description: string;
  status: TaskStatus;
  date: number;
}
