import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task].sort();
    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2 className="heading">Todo List</h2>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="input"
        />
        <button onClick={addTask} className="addButton">
          Add
        </button>
      </div>

      <ul className="list">
        {tasks.map((t, index) => (
          <li key={index} className="listItem">
            {t}
            <button
              onClick={() => deleteTask(index)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
