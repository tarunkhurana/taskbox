import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from '../stories/TaskList.stories';
// src/components/TaskList.test.js

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  // Our story will be used for the test.
  // With the arguments that were created.
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6(Pinned)"]'
  );
  expect(lastTaskInput).toContainElement(lastTaskInput);

  ReactDOM.unmountComponentAtNode(div);
});
