import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../supabase/client";

export const TasksContext = createContext(null);

export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [viewTasks, setViewTasks] = useState("All");
  const { user } = useAuth();

  const getTasks = async () => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .select()
        .eq("userId", user.id);

      if (error) throw error;
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (text) => {
    const task = {
      text,
      id: crypto.randomUUID(),
      userId: user.id,
      completed: false,
    };
    setTasks([...tasks, task]);
    try {
      const { data, error } = await supabase
        .from("tasks")
        .insert(task)
        .select();

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
    try {
      const { data, error } = await supabase
        .from("tasks")
        .update(task)
        .eq("userId", user.id)
        .eq("id", id)
        .select();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    try {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("userId", user.id)
        .eq("id", id)
        .select();
    } catch (error) {
      console.error(error);
    }
  };

  const changeText = async (text, id) => {
    const newTask = [...tasks];
    const task = newTask.find((task) => task.id === id);
    task.text = text;
    setTasks(newTask);
    try {
      const { data, error } = await supabase
        .from("tasks")
        .update(task)
        .eq("userId", user.id)
        .eq("id", id)
        .select();
    } catch (error) {
      console.error(error);
    } finally {
      console.log(newTask);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        toggleComplete,
        deleteTask,
        changeText,
        setViewTasks,
        getTasks,
        viewTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
