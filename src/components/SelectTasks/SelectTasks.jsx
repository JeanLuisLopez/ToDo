import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import style from "./SelectTasks.module.css";

function SelectTasks() {
  const { setViewTasks } = useTasks();
  const [active, setActive] = useState("id1");
  function handleClick(e) {
    const text = e.target.textContent;
    const value = e.target.value;
    setActive(value);
    setViewTasks(text);
  }
  return (
    <div className={style.container}>
      <button
        value={"id1"}
        className={`${style.btn} ${active === "id1" ? style.active : ""}`}
        onClick={handleClick}
      >
        All
      </button>
      <button
        value={"id3"}
        className={`${style.btn} ${active === "id3" ? style.active : ""}`}
        onClick={handleClick}
      >
        Pending
      </button>
      <button
        value={"id2"}
        className={`${style.btn} ${active === "id2" ? style.active : ""}`}
        onClick={handleClick}
      >
        Completed
      </button>
    </div>
  );
}

export default SelectTasks;
