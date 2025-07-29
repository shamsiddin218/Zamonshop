import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Phonefilter from './filterpage/filterphone/Phonefilter';
import Complaptopfilter from './filterpage/filtercomp/Complaptopfilter';
import Tablet from './filterpage/filtertablet/Tablet';
import Smartwatch from './filterpage/filterwatch/Smartwatch';
import Filterheadphone from './filterpage/filterheadphone/Filterheadphone';
import Gamefitler from './filterpage/filtergame/Gamefitler';
import Computerfilter from './filterpage/filtercomputer/Computerfilter';
import Laptopfilter from './filterpage/laptopsfilter/Laptopfilter';
import Tvfilter from './filterpage/filtertv/Tvfilter';
import Texnikafilter from './filterpage/filtertexnika/Texnikafilter';
import Alldatafilter from './filterpage/alldatafilter/Alldatafilter';
import Ofisfilter from './filterpage/ofisfilter/Ofisfilter';
import Samsung from './filterpage/filterphone/childfiterphone/Samsung';
import Honor from './filterpage/filterphone/childfiterphone/Honor';
import Redmi from './filterpage/filterphone/childfiterphone/Redmi';
import Poco from './filterpage/filterphone/childfiterphone/Poco';
import Infinix from './filterpage/filterphone/childfiterphone/Infinix';
import Tecno from './filterpage/filterphone/childfiterphone/Tecno';
import Vivo from './filterpage/filterphone/childfiterphone/Vivo';
import Nokia from './filterpage/filterphone/childfiterphone/Nokia';
import Iphone from './filterpage/filterphone/childfiterphone/Iphone';
import Acercomp from './filterpage/filtercomputer/childkompfilter/Acercomp';
import Qubitcomp from './filterpage/filtercomputer/childkompfilter/Qubitcomp';
import Gamecomp from './filterpage/filtercomputer/childkompfilter/Gamecomp';
import Tashqicomp from './filterpage/filtercomputer/childkompfilter/Tashqicomp';
import Cheapcomp from './filterpage/filtercomputer/childkompfilter/Cheapcomp';
import Acer from './filterpage/laptopsfilter/childlaptopfilter/Acer';
import Lenovo from './filterpage/laptopsfilter/childlaptopfilter/Lenovo';
import Hp from './filterpage/laptopsfilter/childlaptopfilter/Hp';
import Dell from './filterpage/laptopsfilter/childlaptopfilter/Dell';
import Net from './filterpage/laptopsfilter/childlaptopfilter/Net';
import Asus from './filterpage/laptopsfilter/childlaptopfilter/Asus';
import Mac from './filterpage/laptopsfilter/childlaptopfilter/Mac';
import Gamecursor from './filterpage/filtergame/childgame/Gamecursor';
import Gamekeyboard from './filterpage/filtergame/childgame/Gamekeyboard';
import Joystik from './filterpage/filtergame/childgame/Joystik';
import Chear from './filterpage/filtergame/childgame/Chear';
import Gilamcha from './filterpage/filtergame/childgame/Gilamcha';
import Smarttv from './filterpage/filtertv/childtv/Smarttv';
import Kabel from './filterpage/filtertv/childtv/Kabel';
import Pult from './filterpage/filtertv/childtv/Pult';
import CheapTV from './filterpage/filtertv/childtv/CheapTV';
import Antena from './filterpage/filtertv/childtv/Antena';
import Tuner from './filterpage/filtertv/childtv/Tuner';
import Gilof from './filterpage/filtertablet/childtablet/Gilof';
import Ipad from './filterpage/filtertablet/childtablet/Ipad';
import Kuller from './filterpage/filtertablet/childtablet/Kuller';
import Book from './filterpage/filtertablet/childtablet/Book';
import Pen from './filterpage/filtertablet/childtablet/Pen';
import Smart from './filterpage/filterwatch/childwatch/Smart';
import Tasma from './filterpage/filterwatch/childwatch/Tasma';
import Watchgilof from './filterpage/filterwatch/childwatch/Watchgilof';
import Ice from './filterpage/filtertexnika/childtexnika/Ice';
import Air from './filterpage/filtertexnika/childtexnika/Air';
import Pech from './filterpage/filtertexnika/childtexnika/Pech';
import ProductCard from './pages/ProductCard';
import ProductView from './pages/ProductView';
import Buyproduct from './pages/Buyproduct';
import SavedProduct from './pages/SavedProduct';
import About from './pages/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AccordionDemo } from './components/AccordionDemo';
import Caliingpage from './pages/Caliingpage';
import Dashboard from './components/Dashboard';
import ShopSection from './pages/Shopsection';
import Profile from './components/Profil';
import KrediBuy from './pages/KreditBuy';
import NotFound from './components/NotFound';
import Promo from './components/Promo';
import SearchProduct from './components/SearchProduct';
function App() {
  useEffect(() => {
  Aos.init({
    duration: 1000,
  });
}, [])
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cartItems'));
    if (saved) {
      setCartItems(saved);
    }
  }, []);

  // ✅ Mahsulot qo‘shish funksiyasi
  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const exist = prevItems.find(p => p.id === item.id);
      let updatedCart;

      if (exist) {
        updatedCart = prevItems.map(p =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + (item.quantity || 1) }
            : p
        );
      } else {
        updatedCart = [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleDelete = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const [allProducts, setAllProducts] = useState([]);

useEffect(() => {
  fetch('/data.json') // yoki haqiqiy API
    .then((res) => res.json())
    .then((data) => setAllProducts(data));
}, []);
  const routes = createBrowserRouter([
    




    {
      path: '/',
      element: <Layout cartItems={cartItems} allProducts={allProducts}/>,
      children: [
        { index: true, element: <Home handleAddToCart={handleAddToCart} /> },
        { path: '/phone', element: <Phonefilter handleAddToCart={handleAddToCart} /> },
        { path: '/compslaptops', element: <Computerfilter handleAddToCart={handleAddToCart} /> },
        { path: '/tablet', element: <Tablet handleAddToCart={handleAddToCart} /> },
        { path: '/watch', element: <Smartwatch handleAddToCart={handleAddToCart} /> },
        { path: '/headphone', element: <Filterheadphone handleAddToCart={handleAddToCart} /> },
        { path: '/game', element: <Gamefitler handleAddToCart={handleAddToCart} /> },
        { path: '/computers', element: <Computerfilter handleAddToCart={handleAddToCart} /> },
        { path: '/laptops', element: <Laptopfilter handleAddToCart={handleAddToCart} /> },
        { path: '/tv', element: <Tvfilter handleAddToCart={handleAddToCart} /> },
        { path: '/texnika', element: <Texnikafilter handleAddToCart={handleAddToCart} /> },
        { path: '/all', element: <Alldatafilter handleAddToCart={handleAddToCart} /> },
        { path: '/allofis', element: <Ofisfilter handleAddToCart={handleAddToCart} /> },
        { path: '/samsung', element: <Samsung handleAddToCart={handleAddToCart} /> },
        { path: '/honor', element: <Honor handleAddToCart={handleAddToCart} /> },
        { path: '/redmi', element: <Redmi handleAddToCart={handleAddToCart} /> },
        { path: '/poco', element: <Poco handleAddToCart={handleAddToCart} /> },
        { path: '/iphone', element: <Iphone handleAddToCart={handleAddToCart} /> },
        { path: '/infinix', element: <Infinix handleAddToCart={handleAddToCart} /> },
        { path: '/tecno', element: <Tecno handleAddToCart={handleAddToCart} /> },
        { path: '/vivo', element: <Vivo handleAddToCart={handleAddToCart} /> },
        { path: '/nokia', element: <Nokia handleAddToCart={handleAddToCart} /> },
        { path: '/acercomp', element: <Acercomp handleAddToCart={handleAddToCart} /> },
        { path: '/qubitcomp', element: <Qubitcomp handleAddToCart={handleAddToCart} /> },
        { path: '/gamecomp', element: <Gamecomp handleAddToCart={handleAddToCart} /> },
        { path: '/qurilmacomp', element: <Tashqicomp handleAddToCart={handleAddToCart} /> },
        { path: '/arzoncomp', element: <Cheapcomp handleAddToCart={handleAddToCart} /> },
        { path: '/acer', element: <Acer handleAddToCart={handleAddToCart} /> },
        { path: '/lenovo', element: <Lenovo handleAddToCart={handleAddToCart} /> },
        { path: '/hp', element: <Hp handleAddToCart={handleAddToCart} /> },
        { path: '/dell', element: <Dell handleAddToCart={handleAddToCart} /> },
        { path: '/net', element: <Net handleAddToCart={handleAddToCart} /> },
        { path: '/asus', element: <Asus handleAddToCart={handleAddToCart} /> },
        { path: '/mac', element: <Mac handleAddToCart={handleAddToCart} /> },
        { path: '/gamemause', element: <Gamecursor handleAddToCart={handleAddToCart} /> },
        { path: '/gamekeyboard', element: <Gamekeyboard handleAddToCart={handleAddToCart} /> },
        { path: '/joystik', element: <Joystik handleAddToCart={handleAddToCart} /> },
        { path: '/chair', element: <Chear handleAddToCart={handleAddToCart} /> },
        { path: '/mikrafon', element: <Gilamcha handleAddToCart={handleAddToCart} /> },
        { path: '/smartTv', element: <Smarttv handleAddToCart={handleAddToCart} /> },
        { path: '/TVkabel', element: <Kabel handleAddToCart={handleAddToCart} /> },
        { path: '/TVpult', element: <Pult handleAddToCart={handleAddToCart} /> },
        { path: '/cheaptv', element: <CheapTV handleAddToCart={handleAddToCart} /> },
        { path: '/TVantena', element: <Antena handleAddToCart={handleAddToCart} /> },
        { path: '/TVtyuner', element: <Tuner handleAddToCart={handleAddToCart} /> },
        { path: '/tabletchexol', element: <Gilof handleAddToCart={handleAddToCart} /> },
        { path: '/tabletipad', element: <Ipad handleAddToCart={handleAddToCart} /> },
        { path: '/tabletkuller', element: <Kuller handleAddToCart={handleAddToCart} /> },
        { path: '/elektrbook', element: <Book handleAddToCart={handleAddToCart} /> },
        { path: '/sensorpen', element: <Pen handleAddToCart={handleAddToCart} /> },
        { path: '/kids', element: <Smart handleAddToCart={handleAddToCart} /> },
        { path: '/tasma', element: <Tasma handleAddToCart={handleAddToCart} /> },
        { path: '/chexol', element: <Gilof handleAddToCart={handleAddToCart} /> },
        { path: '/muzlatkich', element: <Ice handleAddToCart={handleAddToCart} /> },
        { path: '/air', element: <Air handleAddToCart={handleAddToCart} /> },
        { path: '/pech', element: <Pech handleAddToCart={handleAddToCart} /> },
        { path: '/gilof', element: <Watchgilof handleAddToCart={handleAddToCart} /> },
        {
          path: '/card',
          element: <ProductCard
            cartItems={cartItems}
            onDelete={handleDelete}
          />
        },
        {
          path:'/productbuy',
          element:<Buyproduct/>
        },
        {
          path:'/savedproduct',
          element:<SavedProduct handleAddToCart={handleAddToCart}/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/aswer',
          element:<AccordionDemo/>
        },
        {
          path:'/contact',
          element:<Caliingpage/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/shop',
          element:<ShopSection/>
        },
        {
          path:'/profil',
          element:<Profile/>
        },
        {
          path:'/term',
          element:<KrediBuy/>
        },
        {
          path:'/promogame',
          element:<Promo/>
        },
        {
          path:'/search',
          element:<SearchProduct/>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
