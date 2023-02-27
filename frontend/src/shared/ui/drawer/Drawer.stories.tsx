import { ComponentStory, ComponentMeta } from '@storybook/react';

import { menuItems } from '../layout/BaseLayout/constants';
import { Menu } from '../menu';
import { Drawer } from './Drawer';

export default {
  title: 'Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Base = Template.bind({});

Base.args = {
  open: true,
  childrenMenu: <Menu open items={menuItems} />,
};
