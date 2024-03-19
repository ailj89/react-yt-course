import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const submitTask = () => {
    var newTask = {
      name: task,
      isComplete: false,
      isEditing: false,
      // id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1;
    };

    setTaskList([...taskList, newTask]);
  };

  const completeTask = (task) => {
    setTask((task.isComplete = !task.isComplete));
    setTaskList([...taskList]);
  };

  const removeTask = (idx) => {
    setTaskList(taskList.filter((task) => taskList.indexOf(task) !== idx));
  };

  const editTask = (task) => {
    setTask((task.isEditing = !task.isEditing));
    setTaskList([...taskList]);
  };

  const updateTask = (updatedTask, idx) => {
    setTask(
      taskList.map((task) => {
        if (taskList.indexOf(task) === idx) {
          task.name = updatedTask;
        }
        return taskList;
      })
    );
  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleTask} />
        <button onClick={submitTask}>Add Task</button>
      </div>
      <div className="list-container">
        <ul className="list">
          {taskList.map((task, idx) => (
            <Task
              task={task}
              idx={idx}
              completeTask={completeTask}
              editTask={editTask}
              removeTask={removeTask}
              updateTask={updateTask}
              handleTask={handleTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
