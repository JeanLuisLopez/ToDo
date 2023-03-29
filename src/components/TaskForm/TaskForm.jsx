import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useTasks } from "../../hooks/useTasks";
import style from "./TaskForm.module.css";

function TaskForm() {
  const [value, setValue] = useState("");
  const { addTask } = useTasks();

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmite(e) {
    e.preventDefault();
    if (value === "") return;
    addTask(value);
    setValue("");
  }

  return (
    <form className={style.form} onSubmit={handleSubmite}>
      <input
        value={value}
        className={style.input}
        type="text"
        onChange={handleChange}
      />
      <button className={style.addBtn}>
        <RiAddLine />
      </button>
    </form>
  );
}

export default TaskForm;
