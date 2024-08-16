// src/components/CreateTask.tsx
import React, { useState } from "react";
import { ethers } from "ethers";
import TaskManagerArtifact from "../artifacts/contracts/TaskManager.sol/TaskManager.json";

interface CreateTaskProps {
  onTaskCreated: () => void; // Callback to notify the parent component that a task was created
}

const CreateTask: React.FC<CreateTaskProps> = ({ onTaskCreated }) => {
  const [description, setDescription] = useState<string>("");

  const handleCreateTask = async () => {
    if (!description) return;

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const taskManager = new ethers.Contract(
        "0x63554Aa16C56e55693E8d437036a84dB8444e764", // Replace with your contract address
        TaskManagerArtifact.abi,
        signer
      );

      const tx = await taskManager.createTask(description);
      await tx.wait(); // Wait for the transaction to be mined

      setDescription(""); // Clear the input field
      onTaskCreated(); // Notify the parent component to refresh the task list
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold mb-4">Create New Task</h2>
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={handleCreateTask}
      >
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
