import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeSkeleton from '../skleton/HomeSkeleton';

export default function Layout() {
  const [loading, setLoading] = useState(() => {
    const alreadyLoaded = sessionStorage.getItem('skeletonLoaded');
    return !alreadyLoaded;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
        sessionStorage.setItem('skeletonLoaded', 'true'); // faqat birinchi martaga
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    document.body.style.overflow = 'hidden';
    return <HomeSkeleton />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
