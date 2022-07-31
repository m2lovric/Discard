import React from 'react';
import Navi from './Nav';

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <main className='flex h-screen w-full'>
      <Navi />
      {children}
    </main>
  );
};

export default Layout;
