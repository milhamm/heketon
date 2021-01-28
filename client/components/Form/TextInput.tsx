import React from 'react';

type TextInputTypes = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
};

const TextInput = ({ type, className, ...rest }: TextInputTypes) => {
  const inputClassname = `${className} w-full bg-white px-6 py-3 border-gray-500 border rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none`;
  return <input type={type} {...rest} className={inputClassname} />;
};

export default TextInput;
