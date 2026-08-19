import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span className={task.completed ? "completed" : ""}>
            title: {task.title} - description: {task.description}
          </span>
          <button onClick={() => onToggleTask(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
