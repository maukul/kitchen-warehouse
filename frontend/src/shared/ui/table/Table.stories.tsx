import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});

Base.args = {
  thead: {
    items: [
      {
        label: 'ID',
      },
      {
        label: 'First name',
      },
      {
        label: 'Last name',
      },
    ],
  },
  itemsRow: [
    {
      items: [
        {
          data: '1',
        },
        {
          data: 'Misha',
        },
        {
          data: 'Yas',
        },
      ],
    },
    {
      items: [
        {
          data: '2',
        },
        {
          data: 'Ura',
        },
        {
          data: 'Yes',
        },
      ],
    },
  ],
};
