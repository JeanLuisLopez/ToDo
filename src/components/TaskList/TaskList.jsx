import React, { useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";
import { filterTasks } from "../../utils/filterTasks";
import Task from "../Task/Task";
import style from "./Tasklist.module.css";

function TaskList() {
  const { tasks, getTasks, viewTasks } = useTasks();
  const filteredTasks = filterTasks(tasks, viewTasks);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul
      className={`${style.container} ${
        filteredTasks.length !== 0 ? style.containerBorder : ""
      }`}
    >
      {filteredTasks.length === 0 ? (
        <h3 className={style.title}>No Tasks</h3>
      ) : (
        filteredTasks.map((task) => <Task task={task} key={task.id} />)
      )}
    </ul>
  );
}

export default TaskList;
