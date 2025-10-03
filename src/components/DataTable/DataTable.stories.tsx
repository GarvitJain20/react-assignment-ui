import { Meta, StoryObj } from '@storybook/react';
import { DataTable, DataTableProps, Column } from './DataTable';

interface User {
  name: string;
  age: number;
  city: string;
}

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'city', title: 'City', dataIndex: 'city' },
];

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    columns,
    data: [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Alice', age: 25, city: 'London' },
      { name: 'Bob', age: 40, city: 'Paris' },
    ],
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data: [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Alice', age: 25, city: 'London' },
      { name: 'Bob', age: 40, city: 'Paris' },
    ],
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};
