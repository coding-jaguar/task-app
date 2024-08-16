// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TaskManager {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string description;
        bool isDeleted;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(uint id, string description);
    event TaskDeleted(uint id);

    function createTask(string memory _description) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _description, false);
        emit TaskCreated(taskCount, _description);
    }

    function deleteTask(uint _taskId) public {
        require(_taskId > 0 && _taskId <= taskCount, "Task ID is invalid");
        Task storage task = tasks[_taskId];
        require(!task.isDeleted, "Task already deleted");

        task.isDeleted = true;
        emit TaskDeleted(_taskId);
    }

    function getTask(
        uint _taskId
    ) public view returns (uint, string memory, bool) {
        require(_taskId > 0 && _taskId <= taskCount, "Task ID is invalid");
        Task storage task = tasks[_taskId];
        return (task.id, task.description, task.isDeleted);
    }

    function getAllTasks() public view returns (Task[] memory) {
        Task[] memory allTasks = new Task[](taskCount);
        uint counter = 0;

        for (uint i = 1; i <= taskCount; i++) {
            if (!tasks[i].isDeleted) {
                allTasks[counter] = tasks[i];
                counter++;
            }
        }

        return allTasks;
    }
}
