import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import styles from "../styles/AddTask.module.css";

const AddTask = () => {
  const { tasks, updateTasks } = useTaskStore();
  const [task, setTask] = useState<string>();

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTask("");

    if (task) {
      const newTask = [
        ...tasks,
        {
          task: task,
          isComplited: false,
        },
      ];

      updateTasks(newTask);
    }
  };

  console.log(task);

  return (
    <form action="" onSubmit={handleAddTask} className={styles.form}>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        className={styles.add_task_input}
        placeholder="Введите задачу..."
      />
      <button type="submit" className={styles.button}>
        <span>
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              fill="currentColor"
            ></path>
          </svg>
          Добавить
        </span>
      </button>
    </form>
  );
};

export default AddTask;
