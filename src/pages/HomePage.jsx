import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = ({ tasks, addTask, updateTask, deleteTask }) => {
  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default HomePage;
