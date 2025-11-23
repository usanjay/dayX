import Calander from './pages/CalanderPage/Calander'
import Home from "./pages/HomePage/Home";
import { Routes, Route } from 'react-router';
import { useState } from "react";

function App() {

  const loadTasks = () => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    return stored.map(t => ({
      ...t,
      startDate: new Date(t.startDate),
      endDate: new Date(t.endDate)
    }));
  }

  const [tasks, setTasks] = useState(loadTasks);

  const toLocaleDate = (dateString) => {
    console.log(dateString)
    const [y, m, d] = dateString.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  const addtoStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const createTask = (data) => {
    const newList = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        taskName: data.taskName,
        startDate: toLocaleDate(data.startDate),
        endDate: toLocaleDate(data.endDate)
      }
    ]
    setTasks(newList);
    addtoStorage(newList);
  }

  const deleteTask = (id) => {
    const newList = tasks.filter(task => task.id != id);
    setTasks(newList);
    addtoStorage(newList);
  }


  return (
    <Routes>
      <Route index element={<Home tasks={tasks} createTask={createTask} deleteTask={deleteTask} />} />
      <Route path="calander/:id" index element={<Calander tasks={tasks} createTask={createTask} />} />
    </Routes>
  )
}

export default App
