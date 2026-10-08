import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import AddTask from "./components/Addtask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask
    ]);
  };

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Todo List</Link>
        {" | "}
        <Link to="/add-task">Add Task</Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<TaskList tasks={tasks} />}
        />

        <Route
          path="/add-task"
          element={<AddTask addTask={addTask} />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;