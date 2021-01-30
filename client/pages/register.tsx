import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';
import TextInput from '@components/Form/TextInput';
import AuthLayout from '@components/Layout/AuthLayout';

const Register = () => {
  const meta = {
    title: 'Daftar Akun',
  };
  return (
    <AuthLayout meta={meta}>
      <h4 className='font-bold text-left text-gray-700 w-full text-xl mb-2'>
        Daftar Akun
      </h4>
      <p className='my-0 text-gray-400'>Silahkan buat akun terlebih dahulu</p>
      <TextInput type='text' className='border px-6 mt-8' placeholder='name' />
      <TextInput type='text' className='border px-6 mt-3' placeholder='email' />
      <TextInput
        type='password'
        className='border mt-3 px-6'
        placeholder='password'
      />
      <Button htmlType='submit' type='primary' className='w-full mt-3 '>
        Register
      </Button>
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
