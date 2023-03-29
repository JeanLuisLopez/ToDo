import SelectTasks from "../../components/SelectTasks/SelectTasks";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { useOnline } from "../../hooks/useOnline";
import styles from "./Tasks.module.css";

function Tasks() {
  const { isOnline } = useOnline();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO</h1>
      {isOnline ? (
        ""
      ) : (
        <div className={styles.connectionErrorBlur}>
          <span className={styles.connectionError}>Connection Error</span>
        </div>
      )}
      <TaskForm />
      <SelectTasks />
      <TaskList />
    </div>
  );
}

export default Tasks;
