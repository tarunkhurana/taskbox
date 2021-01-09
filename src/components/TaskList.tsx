import * as React from 'react';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';
import { TaskListProps } from '../types/interface';
import Task from './Task';

export function TaskList(props: TaskListProps): JSX.Element {
  const { loading, tasks, onPinTask, onArchiveTask } = props;

  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <div className='title-message'>You have no tasks</div>
          <div className='subtitle-message'>Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className='list-items'>
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default connect(
  (state: any) => ({
    tasks: state.tasks.filter(
      (t: any) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    ),
  }),
  dispatch => ({
    onArchiveTask: (id: any) => dispatch(archiveTask(id)),
    onPinTask: (id: any) => dispatch(pinTask(id)),
  })
)(TaskList);
