import React from 'react';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

const Button = ({ className, type, icon, children }: ButtonProps) => {
  const buttonType =
    type == 'primary'
      ? 'bg-primary text-white'
      : type === 'secondary'
      ? 'border-primary border text-primary hover:bg-primary hover:text-white transition-all'
      : 'bg-white';

  const buttonClassname = `${
    className ? className : ''
  } ${buttonType} rounded-lg py-2 px-6 font-primary`;

  return (
    <button className={buttonClassname}>
      {icon && <span className='flex justify-center items-center'>{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
