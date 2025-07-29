import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeSkeleton from '../skleton/HomeSkeleton';

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
      <Navbar  cartItems={cartItems} allProducts={allProducts}/>
      <Outlet />
      <Footer />

    </>
  );
}  