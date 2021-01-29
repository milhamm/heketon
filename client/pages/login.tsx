import Button from '@components/Button';
import TextInput from '@components/Form/TextInput';
import React from 'react';

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white max-w-5xl w-full grid grid-rows-1 grid-cols-6 shadow-xl mx-auto rounded-lg'>
        <div className='col-span-2 h-full bg-primary rounded-l-lg'></div>
        <div className='col-span-4 flex flex-col px-24 py-32 justify-center items-center'>
          <h2 className='font-bold mb-8'>
            Login to Tescov.<span className='text-primary'>id</span>
          </h2>
          <TextInput type='text' className='border' placeholder='email' />
          <TextInput
            type='password'
            className='border mt-3'
            placeholder='password'
          />
          <Button type='primary' className='w-full mt-3 '>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
