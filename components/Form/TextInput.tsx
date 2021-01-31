import React from 'react';

type TextInputTypes = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
  value?: any;
  name?: string;
};

const TextInput = React.forwardRef<
  HTMLInputElement,
  TextInputTypes & Record<string, any>
>(({ type, className, value, name, ...rest }, ref) => {
  const inputClassname = `${className} w-full bg-white py-3 rounded-lg focus:outline-none`;
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      className={inputClassname}
      autoComplete='false'
      value={value}
      {...rest}
    />
  );
});

export default TextInput;
