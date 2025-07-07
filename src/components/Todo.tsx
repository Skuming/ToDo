import type { Children } from "../interfaces/interfaces";
import styles from "../styles/Todo.module.css";
import AddTask from "./AddTask";

const Todo = ({ children }: Children) => {
  return (
    <div className={styles.todo}>
      <AddTask></AddTask>
      {children}
    </div>
  );
};

export default Todo;
