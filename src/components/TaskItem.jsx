import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const toggleCompletion = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className='btn btn-primary' onClick={toggleCompletion}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <Link className='btn btn-primary' to={`/task/${task.id}`}>View Details</Link>
      <button  className='btn btn-primary' onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
