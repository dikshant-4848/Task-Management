import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';

const TaskDetailPage = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <TaskDetail task={task} />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default TaskDetailPage;
