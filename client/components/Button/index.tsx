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
      ? 'bg-primary'
      : type === 'secondary'
      ? 'border-primary border-2 text-primary'
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
