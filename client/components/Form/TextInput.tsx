import React from 'react';

type TextInputTypes = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
  value?: any;
};

const TextInput = ({
  type,
  className,
  value,
  ...rest
}: TextInputTypes & Record<string, any>) => {
  const inputClassname = `${className} w-full bg-white px-6 py-3 rounded-lg focus:outline-none`;
  return (
    <input
      type={type}
      {...rest}
      className={inputClassname}
      autoFocus
      value={value}
    />
  );
};

export default TextInput;
