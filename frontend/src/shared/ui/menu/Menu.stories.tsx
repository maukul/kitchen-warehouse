import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './Menu';

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Base = Template.bind({});

Base.args = {
  open: true,
  items: [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/',
      label: 'Test',
    },
  ],
};
