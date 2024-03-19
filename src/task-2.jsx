import { useState } from "react";

const Task2 = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  const submitTask = () => {
    // setTasks(tasks.push(task))
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleInput} />
        <br />
        <button onClick={submitTask}>Submit</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
};
