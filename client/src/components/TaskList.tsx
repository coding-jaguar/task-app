// src/components/TaskList.tsx
import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  description: string;
  isDeleted: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (taskId: number) => void; // Add this prop to handle deletion
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
