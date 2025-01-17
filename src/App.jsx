import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
    
    <div className='intro'>Task Management System</div>
    <div>
      
      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />}
        />
        <Route
          path="/task/:id"
          element={<TaskDetailPage tasks={tasks} />}
        />
      </Routes>
    </div>
    </>
  );
};

export default App;
