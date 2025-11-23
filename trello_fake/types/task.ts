export interface Task {
  id: number;
  projectId: number;
  title: string;
  description?: string;
  status: 'todo' | 'doing' | 'done';
  assignee?: string;
  dueDate?: string; // ISO date string si necesitas
}