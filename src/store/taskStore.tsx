import { create } from "zustand";
import type { TaskStore } from "../interfaces/interfaces";

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  updateTasks: (newTasks) => set({ tasks: newTasks }),
}));
