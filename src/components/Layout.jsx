import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import HomeSkeleton from '../skleton/HomeSkeleton';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout({cartItems, allProducts}) {
  const [loading, setLoading] = useState(() => {
    const alreadyLoaded = sessionStorage.getItem('skeletonLoaded');
    return !alreadyLoaded;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('skeletonLoaded', 'true'); // faqat birinchi martaga
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <>
    <ScrollToTopButton/>
    <ScrollToTop/>
      <Navbar  cartItems={cartItems} allProducts={allProducts}/>
      <Outlet />
      <Footer />

    </>
  );
}  