import type { Children } from "../interfaces/interfaces";
import styles from "../styles/Task.module.css";

const Task = ({ children }: Children) => {
  return <div className={styles.task}>{children}</div>;
};

export default Task;
