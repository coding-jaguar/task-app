// src/App.tsx
import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import { ethers } from "ethers";
import TaskManagerArtifact from "./artifacts/contracts/TaskManager.sol/TaskManager.json";

interface Task {
  id: number;
  description: string;
  isDeleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const taskManager = new ethers.Contract(
      "0x63554aa16c56e55693e8d437036a84db8444e764", // Replace with your contract address
      TaskManagerArtifact.abi,
      signer
    );

    const taskCount = await taskManager.taskCount();
    const loadedTasks: Task[] = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await taskManager.getTask(i);
      loadedTasks.push({
        id: parseInt(task[0]),
        description: task[1],
        isDeleted: task[2],
      });
    }
    setTasks(loadedTasks);
  };

  const deleteTask = async (taskId: number) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const taskManager = new ethers.Contract(
        "0x63554aa16c56e55693e8d437036a84db8444e764", // Replace with your contract address
        TaskManagerArtifact.abi,
        signer
      );

      const tx = await taskManager.deleteTask(taskId);
      await tx.wait(); // Wait for the transaction to be mined

      loadTasks(); // Reload tasks after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <CreateTask onTaskCreated={loadTasks} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
