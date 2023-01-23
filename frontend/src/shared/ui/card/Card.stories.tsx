import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../app/index.css';
import { Hero } from './Card';

export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: 'Hero',
};
