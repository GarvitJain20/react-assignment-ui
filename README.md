# React UI Components Assignment

This project contains two React components built using **React, TypeScript, TailwindCSS, and Storybook**.  
Components are fully typed, responsive, and documented with interactive stories.

---

## **Components**

### 1. InputField
A flexible input component with support for:

- Label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Light & dark theme support (optional)

**Props:**

```ts
interface InputFieldProps {
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
  showClearButton?: boolean;
  isPassword?: boolean;
}
