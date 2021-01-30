import { useAuth } from 'context/authentication';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (Component) => ({ ...props }) => {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      router.push('/login');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div className='bg-white'></div>;
  }

  return <Component {...props} />;
};

export default withAuth;
