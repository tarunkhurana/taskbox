import * as React from 'react';
import { TaskProps } from '../types/interface';

export default function Task(props: TaskProps): JSX.Element {
  const {
    task: { title, state, id },
    onArchiveTask,
    onPinTask,
  } = props;

  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled
          name='checked'
        />
        <span
          aria-hidden='true'
          className='checkbox-custom'
          onClick={() => onArchiveTask(id)}
        />
      </label>
      <div className='title'>
        <input
          type='text'
          value={title}
          readOnly
          placeholder='Input title'
          style={{
            background: 'red',
          }}
        />
      </div>
      <div
        aria-hidden='true'
        className='actions'
        onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a aria-hidden='true' onClick={() => onPinTask(id)}>
            <span className='icon-star' />
          </a>
        )}
      </div>
    </div>
  );
}
