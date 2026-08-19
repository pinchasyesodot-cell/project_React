import React, { useState } from "react";
import type { FilterStatus, Task } from "./types";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TaskFilter } from "./components/TasksFilter";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const [filter, setFilter] = useState<FilterStatus>("all");
  const filterTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true
  });
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={filterTasks}
        onToggleTask={(id) =>
          setTasks(
            filterTasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task,
            ),
          )
        }
        onDeleteTask={(id) => setTasks(filterTasks.filter((task) => task.id !== id))}
      />
      <TaskFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      ></TaskFilter>
    </div>
  );
};
export default App;
