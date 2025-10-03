import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
export const InputField = ({ value = '', onChange, label, placeholder, helperText, errorMessage, disabled = false, invalid = false, variant = 'outlined', size = 'md', type = 'text', showClearButton = false, showPasswordToggle = false, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
    };
    const variantClasses = {
        filled: 'bg-gray-100 border border-gray-300 rounded',
        outlined: 'border border-gray-400 rounded bg-white',
        ghost: 'border-b border-gray-400 bg-transparent rounded-none',
    };
    const borderColor = invalid ? 'border-red-500' : '';
    return (_jsxs("div", { className: "flex flex-col w-full", children: [label && _jsx("label", { className: "mb-1 font-medium", children: label }), _jsxs("div", { className: "relative flex items-center", children: [_jsx("input", { type: showPasswordToggle && showPassword ? 'text' : type, value: value, onChange: onChange, placeholder: placeholder, disabled: disabled, className: `${sizeClasses[size]} ${variantClasses[variant]} ${borderColor} w-full focus:outline-none focus:ring-2 focus:ring-blue-400` }), showClearButton && value && (_jsx("button", { type: "button", onClick: () => onChange?.({ target: { value: '' } }), className: "absolute right-8 text-gray-500 hover:text-gray-700", children: "\u2715" })), showPasswordToggle && type === 'password' && (_jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-2 text-gray-500 hover:text-gray-700", children: showPassword ? '🙈' : '👁️' }))] }), helperText && !invalid && _jsx("span", { className: "mt-1 text-gray-500 text-sm", children: helperText }), invalid && errorMessage && _jsx("span", { className: "mt-1 text-red-500 text-sm", children: errorMessage })] }));
};
