import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../app/index.css';
import { Navbar } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});

Base.args = {
  className: 'bg-base-100',
  children: <a className="btn btn-ghost normal-case text-xl">Navbar</a>,
};
