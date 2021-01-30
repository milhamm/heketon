import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '@components/Button';
import { useAuth } from '@context/authentication';
import { initialName } from '@lib/initialName';

type NavItems = {
  children: React.ReactNode;
  link: string;
};

type AvatarType = {
  name: string;
  onClick?: any;
};

const avatarSize = '40px';
const avatarStyle = {
  width: avatarSize,
  height: avatarSize,
  lineHeight: avatarSize,
};

const Avatar = ({ name, onClick }: AvatarType) => {
  return (
    <div
      className='rounded-full bg-primary text-white text-center  cursor-pointer'
      style={avatarStyle}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

const NavItems = ({ children, link }: NavItems) => {
  return (
    <Link href={link}>
      <a
        className='text-center py-2 hover:bg-gray-100 cursor-pointer transition-colors rounded-lg font-primary'
        style={{ width: '113px' }}
      >
        {children}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navbarRef = useRef(null);

  const [showProfile, setShowProfile] = useState(false);

  const handleOpenProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleCloseProfile = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target))
        setShowProfile(false);
    };

    document.addEventListener('click', handleCloseProfile);

    return () => {
      document.removeEventListener('click', handleCloseProfile);
    };
  }, [navbarRef]);

  return (
    <div
      className='sticky top-0 w-full bg-white shadow-lg z-40 h-16 px-6'
      ref={navbarRef}
    >
      <div className='container py-3 flex mx-auto h-full'>
        <div className='flex-none flex items-center justify-center'>
          <Link href='/'>
            <span className='font-bold text-xl cursor-pointer'>
              Tescov.<span className='text-primary'>id</span>
            </span>
          </Link>
        </div>
        <div className='lg:flex flex-auto items-center justify-end content-end hidden'>
          <NavItems link='/'>Home</NavItems>
          <NavItems link='/faskes'>Cari</NavItems>
          <NavItems link='/about'>Kami</NavItems>
          {!isLoggedIn ? (
            <Link href='/login'>
              <a>
                <div className='ml-4 ' style={{ width: '113px' }}>
                  <Button htmlType='button' className='w-full' type='secondary'>
                    Login
                  </Button>
                </div>
              </a>
            </Link>
          ) : (
            <div className='relative ml-6'>
              <Avatar
                name={initialName(user.name)}
                onClick={() => handleOpenProfile()}
              />
              {showProfile && (
                <div
                  className='bg-white absolute w-64 right-0 shadow-lg rounded-lg flex flex-col items-center justify-center px-3 py-3 border'
                  style={{ top: '4rem' }}
                >
                  <Avatar name={initialName(user.name)} />
                  <p className='text-center mt-3 truncate w-full'>
                    {user.name}
                  </p>
                  <div className='mt-7 w-full'>
                    <Link href='/booking'>
                      <a>
                        <div className='py-2 px-3 rounded cursor-pointer hover:bg-gray-100'>
                          Riwayat Tes
                        </div>
                      </a>
                    </Link>
                    <div
                      className='py-2 px-3 rounded cursor-pointer hover:bg-gray-100 text-red-500'
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
