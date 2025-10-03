import { Meta, StoryObj } from '@storybook/react';
import { InputField, InputFieldProps } from './InputField';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is your unique username',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    showPasswordToggle: true,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type something',
    showClearButton: true,
    value: 'Hello',
  },
};
