import React from 'react';

type TextInputTypes = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
};

const TextInput = ({
  type,
  className,
  ...rest
}: TextInputTypes & Record<string, any>) => {
  const inputClassname = `${className} w-full bg-white px-6 py-3  rounded-lg focus:outline-none`;
  return <input type={type} {...rest} className={inputClassname} autoFocus />;
};

export default TextInput;
