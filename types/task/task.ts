export interface Task {
  type: "test" | "quiz" | "homework" | "other";
  className: string;
  teacherName: string;
  taskName: string;
  taskDueDate: string;
  taskStatus: number;
}
