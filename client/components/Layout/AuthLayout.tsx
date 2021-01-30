import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '@components/SEO';
import { useRouter } from 'next/router';
import { useAuth } from '@context/authentication';

const AuthLayout = ({ children, meta }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <SEO meta={meta} />
      <div className='relative'>
        <div className='container mx-auto px-6 relative z-20 h-screen'>
          <div className='flex h-full'>
            <div className='hidden lg:block lg:flex-1 flex relative'>
              <div className='absolute bottom-0'>
                <Image src='/images/login.png' width={438} height={391} />
              </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <div className='bg-white shadow-lg w-full max-w-lg px-12 lg:px-20 pt-12 pb-24 rounded-lg'>
                <Link href='/'>
                  <a>
                    <h2 className='font-bold font-primary text-center mb-8 text-2xl cursor-pointer border-b pb-6'>
                      Tescov.<span className='text-primary'>id</span>
                    </h2>
                  </a>
                </Link>
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-primary w-1/4 h-screen absolute top-0 right-0 z-0'></div>
      </div>
    </>
  );
};

export default AuthLayout;
