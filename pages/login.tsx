import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import TextInput from '@components/Form/TextInput';
import AuthLayout from '@components/Layout/AuthLayout';
import { useAuth } from '@context/authentication';

const meta = {
  title: 'Login',
};

const Login = () => {
  const { login, error, isLoading } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <AuthLayout meta={meta}>
      <h4 className='font-bold text-left text-gray-700 w-full text-xl mb-2'>
        Login
      </h4>
      <p className='my-0 text-gray-400'>
        Silahkan Login terlebih dahulu sebelum melanjutkan
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className='bg-red-400 px-4 py-2 rounded text-white mt-8'>
            {error}
          </div>
        )}

        <TextInput
          ref={register({ required: true })}
          name='email'
          type='text'
          className='border px-6 mt-3'
          placeholder='email'
        />
        <TextInput
          ref={register({ required: true })}
          type='password'
          name='password'
          className='border mt-3 px-6'
          placeholder='password'
        />
        <Button
          htmlType='submit'
          type='primary'
          className='w-full mt-3'
          loading={isLoading}
        >
          Login
        </Button>
      </form>
      <div className='mt-8 text-right'>
        {`Belum punya akun? `}
        <Link href='/register'>
          <a className='text-primary underline'>Daftar</a>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
