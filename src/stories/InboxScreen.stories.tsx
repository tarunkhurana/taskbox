import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen, IInboxScreenProps } from '../components/InboxScreen';
import * as TaskListStories from './TaskList.stories';

// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  component: PureInboxScreen,
  title: 'Example/Pages/InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template: Story<IInboxScreenProps> = args => (
  <PureInboxScreen {...args} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
