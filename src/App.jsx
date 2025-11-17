import Calander from "./components/Calander";
import Home from "./pages/HomePage/Home";
import { Routes, Route } from 'react-router';
import { useState } from "react";

function App() {
  const initialTasks = [
    {
      taskName: 'New Task 1',
      startDate: new Date(2025, 10, 5),
      endDate: new Date(2025, 10, 20)
    }, {
      taskName: 'New Task 2',
      startDate: new Date(2025, 10, 5),
      endDate: new Date(2025, 10, 20)
    }, {
      taskName: 'New Task 3',
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
      <Route index element={<Home tasks={tasks} createTask={createTask} />} />
      <Route path="calander" index element={<Calander tasks={tasks} createTask={createTask} />} />
    </Routes>
  )
}

export default App
