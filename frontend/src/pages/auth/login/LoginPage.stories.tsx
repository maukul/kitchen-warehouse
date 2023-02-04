import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../app/index.css';
import { LoginPage } from './LoginPage';

export default {
  title: 'Page/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Base = Template.bind({});

Base.args = {};
