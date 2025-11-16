import Calander from "./components/Calander";
import NewTask from "./pages/NewTask";
import Home from "./pages/Home/Home";

import { Routes, Route } from 'react-router';
import { useState } from "react";

function App() {
  const initialTasks = [
    {
      task: 'New Task',
      startDate: new Date(2025, 10, 5),
      endDate: new Date(2025, 10, 20)
    }
  ]

  const [tasks, setTasks] = useState(initialTasks);

  const toLocaleDate = (dateString) => {
    const [y, m, d] = dateString.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  const createTask = (data) => {
    const temp = [{
      task: data.taskName,
      startDate: toLocaleDate(data.startDate),
      endDate: toLocaleDate(data.endDate)
    }]

    setTasks(temp);
  }

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="calander" index element={<Calander tasks={tasks} />} />
      <Route path="newTask" element={<NewTask createTask={createTask} />} />
    </Routes>
  )
}

export default App
