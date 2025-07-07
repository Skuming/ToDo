import Task from "./components/Task";
import Todo from "./components/Todo";
import styles from "./styles/App.module.css";
import { useTaskStore } from "./store/taskStore";
import type { FilterType, TaskTypes } from "./interfaces/interfaces";
import { useState } from "react";

function App() {
  const { tasks, updateTasks } = useTaskStore();

  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.isComplited;
      case "completed":
        return task.isComplited;
      default:
        return true;
    }
  });

  const handleCheck = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isComplited: !task.isComplited } : task
    );
    updateTasks(newTasks);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.todo}>todos</h1>
      <Todo>
        {filteredTasks.map((item: TaskTypes, index) => (
          <Task key={index}>
            <input
              type="checkbox"
              className={styles.check}
              checked={item.isComplited}
              onChange={() => handleCheck(index)}
            />
            <p
              style={{
                textDecoration: item.isComplited ? "line-through" : "none",
              }}
            >
              {item.task}
            </p>
          </Task>
        ))}
      </Todo>
      <div className={styles.filter}>
        <button onClick={() => setFilter("all")} className={styles.button}>
          Все
        </button>
        <button onClick={() => setFilter("active")} className={styles.button}>
          Активные
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={styles.button}
        >
          Завершенные
        </button>
        <button className={styles.button} onClick={() => updateTasks([])}>
          Удалить все
        </button>
      </div>
    </div>
  );
}

export default App;
