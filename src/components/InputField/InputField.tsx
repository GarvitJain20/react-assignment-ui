/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  showClearButton?: boolean;
  showPasswordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  showClearButton = false,
  showPasswordToggle = false,
}) => {
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

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={showPasswordToggle && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`${sizeClasses[size]} ${variantClasses[variant]} ${borderColor} w-full focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        {showClearButton && value && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: '' } } as any)}
            className="absolute right-8 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {helperText && !invalid && <span className="mt-1 text-gray-500 text-sm">{helperText}</span>}
      {invalid && errorMessage && <span className="mt-1 text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};
