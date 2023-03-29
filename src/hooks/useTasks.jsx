import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTasks() {
  const context = useContext(TasksContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a AuthContextProvider");
  }
  return context;
}
