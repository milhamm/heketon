import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import TextInput from '@components/Form/TextInput';
import AuthLayout from '@components/Layout/AuthLayout';
import { useAuth } from '@context/authentication';

const meta = {
  title: 'Daftar Akun',
};

const Register = () => {
  const { registerUser, error } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <AuthLayout meta={meta}>
      <h4 className='font-bold text-left text-gray-700 w-full text-xl mb-2'>
        Daftar Akun
      </h4>
      <p className='my-0 text-gray-400'>Silahkan buat akun terlebih dahulu</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className='bg-red-400 px-4 py-2 rounded text-white mt-8'>
            {error}
          </div>
        )}
        <TextInput
          ref={register({ required: true })}
          name='name'
          type='text'
          className='border px-6 mt-8'
          placeholder='name'
        />
        <TextInput
          ref={register({ required: true })}
          name='email'
          type='text'
          className='border px-6 mt-3'
          placeholder='email'
        />
        <TextInput
          ref={register({ required: true })}
          name='password'
          type='password'
          className='border mt-3 px-6'
          placeholder='password'
        />
        <Button htmlType='submit' type='primary' className='w-full mt-3 '>
          Register
        </Button>
      </form>
      <div className='mt-8 text-right'>
        {`Sudah punya akun? `}
        <Link href='/login'>
          <a className='text-primary underline'>Login</a>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
