import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <main className='flex h-screen w-full'>
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
