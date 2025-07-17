import React, { useLayoutEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeSkeleton from '../skleton/HomeSkeleton';

export default function Layout() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const handleLoad = () => {
    setLoading(false), 2000;
  };

  window.addEventListener('load', handleLoad);

  return () => window.removeEventListener('load', handleLoad);
}, []);
  return (
    <>
      {loading ? <HomeSkeleton /> : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
