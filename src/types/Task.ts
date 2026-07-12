export type TaskStatus =
  | "todo"
  | "in_progress"
  | "done";

export type TaskPriority =
  | "low"
  | "medium"
  | "high";

export interface ITask {
  id: string;

  title: string;

  description?: string;

  category: string;

  priority: TaskPriority;

  status: TaskStatus;

  dueDate?: string;

  userId: string;

  createdAt: string;

  updatedAt: string;
}