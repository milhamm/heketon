import Spinner from '@components/Spinner';
import React from 'react';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  htmlType?: 'button' | 'submit';
  loading?: boolean;
  onClick?: any;
};

const Button = ({
  className,
  type,
  icon,
  children,
  htmlType = 'button',
  loading,
  onClick,
}: ButtonProps) => {
  const buttonType =
    type == 'primary'
      ? `${
          !loading ? 'bg-primary' : 'bg-gray-300 cursor-not-allowed'
        } text-white`
      : type === 'secondary'
      ? 'border-primary border text-primary hover:bg-primary hover:text-white transition-all'
      : 'bg-white';

  const buttonClassname = `${
    className ? className : ''
  } ${buttonType} rounded-lg py-2 px-6 font-primary`;

  return (
    <button
      type={htmlType}
      className={buttonClassname}
      disabled={loading}
      onClick={onClick}
    >
      {icon && <span className='flex justify-center items-center'>{icon}</span>}
      {children && <span>{!loading ? children : <Spinner />}</span>}
    </button>
  );
};

export default Button;
