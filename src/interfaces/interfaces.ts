import type { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface TaskTypes {
  task: string;
  isComplited: boolean;
}

export interface TaskStore {
  tasks: TaskTypes[];
  updateTasks: (newTasks: TaskTypes[]) => void;
}

export type FilterType = "all" | "active" | "completed";
