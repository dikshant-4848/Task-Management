import React from 'react';
import PropTypes from 'prop-types';

const TaskDetail = ({ task }) => (
  <div>
  <div className='Taskdetail'>
    <h1>{task.title}</h1>
    <p>{task.description}</p>
    <p>Priority: {task.priority}</p>
    <p>Created At: {task.createdAt.toString()}</p>
    <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
  </div>
  </div>
);

TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskDetail;
