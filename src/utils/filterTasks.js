export const filterTasks = (tasks, viewTasks) => {
  switch (viewTasks) {
    case "All":
      return tasks;
    case "Completed":
      return tasks.filter((task) => task.completed === true);
    case "Pending":
      return tasks.filter((task) => task.completed === false);
    default:
      return tasks;
  }
};
