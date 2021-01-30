import { useAuth } from 'context/authentication';
import React from 'react';
import { useRouter } from 'next/router';

const withAuth = (Component) => ({ ...props }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return <Component {...props} />;
};

export default withAuth;
