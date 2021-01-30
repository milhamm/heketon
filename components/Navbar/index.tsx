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
      className='rounded-full bg-primary text-white text-center cursor-pointer'
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
  const [showSidebar, setShowSidebar] = useState(false);

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
    <>
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
          <div
            className='flex items-center content-end ml-auto cursor-pointer lg:hidden'
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <div className='w-6'>
              <div className='bg-primary h-1 rounded'></div>
              <div className='bg-primary h-1 my-1 rounded'></div>
              <div className='bg-primary h-1 rounded'></div>
            </div>
          </div>
          <div className='lg:flex flex-auto items-center justify-end content-end hidden'>
            <NavItems link='/'>Home</NavItems>
            <NavItems link='/faskes'>Cari</NavItems>
            {!isLoggedIn ? (
              <Link href='/login'>
                <a>
                  <div className='ml-4 ' style={{ width: '113px' }}>
                    <Button
                      htmlType='button'
                      className='w-full'
                      type='secondary'
                    >
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

      {showSidebar && (
        <div className='bg-white fixed top-0 w-screen h-screen z-50 overflow-hidden'>
          <div className='relative w-full'>
            <div
              className='w-12 h-12 ml-auto flex items-center justify-center font-bold cursor-pointer'
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              X
            </div>
          </div>
          <div className='flex flex-col items-center px-6'>
            {isLoggedIn ? (
              <>
                <Avatar name={initialName(user.name)} />
                <p className='mt-3'>{user.name}</p>
              </>
            ) : (
              <div className='flex-none flex items-center justify-center'>
                <Link href='/'>
                  <span className='font-bold text-xl cursor-pointer'>
                    Tescov.<span className='text-primary'>id</span>
                  </span>
                </Link>
              </div>
            )}

            <div className='w-full mt-8'>
              <Link href='/'>
                <a>
                  <div className='py-4 px-6 rounded cursor-pointer hover:bg-gray-100'>
                    Home
                  </div>
                </a>
              </Link>
            </div>
            <div className='w-full mt-3'>
              <Link href='/faskes'>
                <a>
                  <div className='py-4 px-6 rounded cursor-pointer hover:bg-gray-100'>
                    Cari
                  </div>
                </a>
              </Link>
            </div>
            <div className='w-full mt-3'>
              <Link href='/booking'>
                <a>
                  <div className='py-4 px-6 rounded cursor-pointer hover:bg-gray-100'>
                    Riwayat Tes
                  </div>
                </a>
              </Link>
            </div>
            {isLoggedIn ? (
              <div className='w-full mt-3'>
                <div
                  className='py-4 px-6 rounded cursor-pointer text-red-400 hover:bg-gray-100'
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div className='w-full mt-3'>
                <Link href='/Login'>
                  <a>
                    <div className='py-4 px-6 rounded cursor-pointer hover:bg-gray-100 text-primary'>
                      Login
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
