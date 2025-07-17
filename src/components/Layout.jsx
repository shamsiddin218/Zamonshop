import React, { useLayoutEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeSkeleton from '../skleton/HomeSkeleton';

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (document.readyState === 'complete') {
        setLoading(false);
      } else {
        window.addEventListener('load', () => setLoading(false));
      }
    });

    return () => cancelAnimationFrame(raf);
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
