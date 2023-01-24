import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import '../../../app/index.css';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});

Base.args = {
  value: 'text',
};
