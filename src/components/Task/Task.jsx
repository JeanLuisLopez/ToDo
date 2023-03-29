import { useEffect, useRef, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa";

import { useTasks } from "../../hooks/useTasks";
import style from "./Task.module.css";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);
  const { toggleComplete, deleteTask, changeText } = useTasks();

  const editInput = useRef();

  function handleToggleClick() {
    toggleComplete(task.id);
  }

  function handleDeleteClick() {
    deleteTask(task.id);
  }

  function handleEditBtn() {
    setIsEditing((prev) => !prev);
  }

  function handleOnblur(e) {
    if (e.target.value === "") {
      setInputText(task.text);
      return;
    }
    changeText(inputText, task.id);
    setIsEditing(false);
  }

  function handleOnKeyDow(e) {
    if (!(e.code === "Enter")) return;
    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) {
      editInput.current.focus();
    } else {
      editInput.current.blur();
    }
  }, [isEditing]);

  return (
    <div className={style.container}>
      <div className={style.checkboxBtn} onClick={handleToggleClick}>
        {task.completed ? (
          <FaCheckSquare size={"1.375rem"} />
        ) : (
          <FaRegCheckSquare size={"1.375rem"} />
        )}
      </div>

      <input
        className={`${style.inputText} ${isEditing ? "" : style.desactive}`}
        type="text"
        value={inputText}
        onKeyDown={handleOnKeyDow}
        onBlur={(e) => {
          setTimeout(() => handleOnblur(e), 200);
        }}
        onChange={(e) => setInputText(e.target.value)}
        ref={editInput}
      />

      <p
        className={`${style.text} ${
          task.completed ? style.textCompleted : ""
        }  ${isEditing ? style.desactive : ""}`}
        onClick={handleToggleClick}
      >
        {inputText}
      </p>

      <AiTwotoneEdit
        onClick={handleEditBtn}
        className={`${style.editBtn} ${isEditing ? style.active : ""}`}
        size={"1.5rem"}
      />

      <BsTrashFill
        size={"1.375rem"}
        className={style.trashBtn}
        onClick={handleDeleteClick}
      />
    </div>
  );
}

export default Task;
