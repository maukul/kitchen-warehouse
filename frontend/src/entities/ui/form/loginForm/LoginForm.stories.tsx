import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../../app/index.css';
import { LoginForm } from './LoginForm';

export default {
  title: 'Form/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  defaultValues: {
    email: '',
    password: '',
  },
};
