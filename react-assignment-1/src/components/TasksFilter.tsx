import React from "react";
import type { FilterStatus } from "../types";

interface TaskFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className="task-filter">
      <button
        type="button"
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        type="button"
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        type="button"
        className={currentFilter === "incomplete" ? "active" : ""}
        onClick={() => onFilterChange("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};
