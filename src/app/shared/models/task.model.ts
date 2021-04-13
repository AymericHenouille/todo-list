export interface Task {
  id?: string;
  edit?: boolean;
  validate: boolean;
  userId: string;
  name: string;
  description: string;
  date: number;
}
