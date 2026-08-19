import React from "react";

interface TaskInputProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    onAddTask(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleAddTask} className="task-input-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
