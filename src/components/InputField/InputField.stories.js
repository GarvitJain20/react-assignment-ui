import { InputField } from './InputField';
const meta = {
    title: 'Components/InputField',
    component: InputField,
};
export default meta;
export const Default = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        helperText: 'This is your unique username',
    },
};
export const Error = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        invalid: true,
        errorMessage: 'Invalid email address',
    },
};
export const Disabled = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot type here',
        disabled: true,
    },
};
export const PasswordToggle = {
    args: {
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password',
        showPasswordToggle: true,
    },
};
export const Clearable = {
    args: {
        label: 'Search',
        placeholder: 'Type something',
        showClearButton: true,
        value: 'Hello',
    },
};
