import { useState } from "react";
import { Task } from "./Task";
import "./List.css";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const Navigate = useNavigate();

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) =>
    setTodoList(todoList.filter((task) => task.id !== id));

  const isCompleted = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  };
  return (
    <div className="list">
      <div className="addTask">
        <h1 style={{ color: "purple" }}>Ensar's TodoList</h1>
        <br />
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
        <button onClick={() => Navigate("/")}>Return Home</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={() => deleteTask(task.id)}
              isCompleted={() => isCompleted(task.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
