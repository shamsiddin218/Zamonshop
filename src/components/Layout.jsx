import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeSkeleton from '../skleton/HomeSkeleton';

export default function Layout() {
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/Language/uz.json") // yoki local data bo‘lsa
    .then(res => res.json())
    .then(data => {
      // data bilan ishlang
      setLoading(false);
    });
}, []);


  return (
    <>
    {loading ? (
      <HomeSkeleton/>
    ) : (

      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )}
    </>
  );
}
