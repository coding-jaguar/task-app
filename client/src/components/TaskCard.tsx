// src/components/TaskCard.tsx
import React from "react";

interface TaskCardProps {
  task: {
    id: number;
    description: string;
    isDeleted: boolean;
  };
  onDelete: (taskId: number) => void; // Add this prop to handle deletion
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h3 className="text-xl font-bold mb-2">Task #{task.id}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p
        className={`text-sm ${
          task.isDeleted ? "text-red-500" : "text-green-500"
        }`}
      >
        {task.isDeleted ? "Deleted" : "Active"}
      </p>
      {!task.isDeleted && (
        <button
          className="bg-red-500 text-white p-2 rounded mt-2"
          onClick={() => onDelete(task.id)}
        >
          Delete Task
        </button>
      )}
    </div>
  );
};

export default TaskCard;
