import { createStore } from 'redux';

export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

export const archiveTask = (id: any) => ({
  type: actions.ARCHIVE_TASK,
  id,
});

export const pinTask = (id: any) => ({
  type: actions.PIN_TASK,
  id,
});

function taskStateReducer(taskState: string) {
  return (state: { tasks: any[] }, action: { id: any }) => {
    return {
      ...state,
      tasks: state.tasks.map((task: { id: any }) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks, error: null });
