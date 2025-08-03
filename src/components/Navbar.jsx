import React, { useEffect, useState } from 'react'
import { IoEarth } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { PiSunFill } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { IoLaptopOutline } from "react-icons/io5";
import { PiGameController } from "react-icons/pi";
import { MdConnectedTv } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { BsTablet } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx';
import { GrMapLocation } from "react-icons/gr";
import { useTranslation } from 'react-i18next';
import HomeSkeleton from '../skleton/HomeSkeleton';
export default function Navbar({cartItems , allProducts}) {
  const [language, setLanguage] = useState("uz");
  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLanguage(selectedLang);
  i18n.changeLanguage(selectedLang); // bu muhim!
};

  const [darkMode, setDarkMode] = useState(false);

  // dark mode toggle funksiyasi
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // classni `html` yoki `body` elementiga qo‘shish
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);
  const {t} = useTranslation()

  const [katalog, setkatalog] = useState(false);
  const {i18n} = useTranslation()


  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm(""); // ixtiyoriy: inputni tozalash
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [showSearch, setShowSearch] = useState(false);
   const [open, setOpen] = useState(false);
  

  const links = [
    { path: '/phone', label: t('Thirdnav.phone') },
    { path: '/compslaptops', label: t('Thirdnav.laptops') },
    { path: '/tablet', label: t('Thirdnav.teblet') },
    { path: '/watch', label: t('Thirdnav.watch') },
    { path: '/headphone', label: t('Thirdnav.headphone') },
    { path: '/game', label: t('Thirdnav.game') },
  ];

    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    
<div className={`navbar w-full  z-50 transition-all duration-500 ${isSticky ? 'fixed left-0 right-0 bg-white animate-slideDown dark:bg-[#0c0c2f]' : ''}`}>
      
<div className="w-full bg-gray-100 dark:bg-[#80808066] py-2">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between relative">
        
        {/* Language selector */}
        <NavLink to={'/location'}>

        <button className="flex items-center gap-2 py-1 px-3 border border-gray-400 rounded-md">
          <GrMapLocation/>
        </button>
        </NavLink>

        {/* Menu links */}
        <ul
          className={`absolute top-full left-0 w-full bg-white dark:bg-[#111] px-4 py-4 flex flex-col gap-3 shadow-md sm:static sm:bg-transparent sm:dark:bg-transparent sm:p-0 sm:flex-row sm:gap-5 sm:w-auto sm:shadow-none text-[14px] text-gray-600 dark:text-gray-400 transition-all duration-300 z-50 ${
            isMenuOpen ? "flex" : "hidden sm:flex"
          }`}
        >
          <li><a href="/" className=" xl:font-medium block py-1 hover:text-black dark:hover:text-white transition">{t("li1")}</a></li>
          <li><a href="/shop" className=" xl:font-medium block py-1 hover:text-black dark:hover:text-white transition">{t("li2")}</a></li>
          <li><a href="/about" className=" xl:font-medium block py-1 hover:text-black dark:hover:text-white transition">{t("li3")}</a></li>
          <li><a href="/aswer" className=" xl:font-medium block py-1 hover:text-black dark:hover:text-white transition">{t("li4")}</a></li>
          <li><a href="/contact" className=" xl:font-medium block py-1 hover:text-black dark:hover:text-white transition">{t("li5")}</a></li>
        </ul>

        {/* Right side: dark mode toggle & menu icon */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
            {darkMode ? <PiSunFill className="text-[20px]" /> : <BsMoonStarsFill className="text-[18px]" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-[24px] text-gray-800 dark:text-white"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </nav>
    </div>


    <nav className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between py-3 gap-3 relative">
  {/* Logo */}
  <Link to="/">
    <img
      className="w-[160px] block cursor-pointer dark:hidden"
      src="/logos/zamonshop_logo_clean.png"
      alt="logo"
    />
    <img
      className="w-[160px] cursor-pointer hidden dark:block"
      src="/logos/zamonshop_logo_light.png"
      alt="logo"
    />
  </Link>

  {/* Katalog Button */}
  <button
    onClick={() => setkatalog(true)}
    className="py-[6px] px-[15px] flex items-center gap-2 bg-blue-100 rounded-md font-medium text-blue-600 transition hover:bg-blue-200 dark:bg-blue-600 dark:text-blue-100 dark:hover:bg-blue-500"
  >
    {t("SecondNav.katalog")}
    <CiMenuFries />
  </button>

  {/* Search Input - Desktop */}
  <article className="hidden md:flex border border-gray-400 rounded-md items-center overflow-hidden transition">
    <input
      type="text"
      className="w-[300px] py-[6px] px-[10px] outline-none dark:bg-transparent"
      placeholder="Mahsulot yoki kategoriya..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyPress}
    />
    <button
      onClick={handleSearch}
      className="h-[36px] bg-gray-200 text-gray-600 px-[10px] flex items-center dark:bg-[#80808030]"
    >
      <FiSearch className="dark:text-white" />
    </button>
  </article>

  {/* Right-side icons */}
  <div className="flex items-center gap-[50px]">
    <NavLink to="/savedproduct">
      <button className="flex items-center gap-1 font-medium dark:text-white">
        <FaRegHeart className="text-[20px]" />
        <span className="hidden sm:inline">{t("SecondNav.like")}</span>
      </button>
    </NavLink>

    <NavLink to="/profil">
      <button className="flex items-center gap-1 font-medium dark:text-white">
        <FaRegUser className="text-[20px]" />
        <span className="hidden sm:inline">{t("SecondNav.profil")}</span>
      </button>
    </NavLink>

    <NavLink to="/card">
      <button className="relative flex items-center gap-1 font-medium dark:text-white">
        <MdOutlineShoppingCart className="text-[22px]" />
        <span className="hidden sm:inline">{t("SecondNav.card")}</span>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[12px] px-1.5 rounded-[5px]">
            {cartItems.length}
          </span>
        )}
      </button>
    </NavLink>

    {/* Search Icon (Mobile only) */}
    <button
      onClick={() => setShowSearch(!showSearch)}
      className="md:hidden text-[20px] text-gray-700 dark:text-white"
    >
      <FiSearch />
    </button>
  </div>

  {/* Mobile Search Input - Toggle View */}
  {showSearch && (
    <article className="w-full md:hidden mt-2 border border-gray-400 rounded-md flex items-center overflow-hidden animate-fade-in">
      <input
        type="text"
        className="w-full py-[6px] px-[10px] outline-none dark:bg-transparent"
        placeholder="Mahsulot yoki kategoriya..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="h-[36px] bg-gray-200 text-gray-600 px-[10px] flex items-center dark:bg-[#80808030]"
      >
        <FiSearch className="dark:text-white" />
      </button>
    </article>
  )}
</nav>

    <nav className="max-w-[1200px] m-auto mb-[15px]">
      {/* Mobil menyu tugmasi */}
      <div className="md:hidden flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Menu</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-700 dark:text-gray-200"
        >
          <FiMenu />
        </button>
      </div>

      {/* Menyu linklari */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } md:flex md:gap-5 md:justify-start md:items-center transition-all duration-300`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `block md:inline-block py-[6px] px-[12px] rounded-md font-medium transition-all duration-150
              ${
                isActive
                  ? 'bg-gray-200 dark:bg-[#8080805a] text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#8080805a]'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
    {katalog && (
  <article
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="200"
    className="max-w-[1200px] m-auto bg-gray-100 dark:bg-[#1e293b] p-[20px] rounded-xl absolute right-0 left-0 z-40 top-[105px]"
  >
    <article className="w-full flex justify-between items-start">
      <h2 className="text-blue-900 dark:text-white text-[30px] mb-[24px]">{t('Katalog.All')}</h2>
      <article onClick={() => setkatalog(false)} className="p-[8px] bg-blue-200 dark:bg-gray-700 rounded-xl cursor-pointer">
        <MdClose className="text-[20px] text-blue-700 dark:text-white cursor-pointer" />
      </article>
    </article>

    <article className="relative grid md:grid-cols-4 justify-between items-start gap-y-7 sm:grid-cols-2">
      {/* Phones */}
      <article>
        <NavLink to={'/phone'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><HiOutlineDevicePhoneMobile />{t('Katalog.Phones.allphone')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/samsung'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.samsung')}</li></NavLink>
          <NavLink to={'/iphone'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.apple')}</li></NavLink>
          <NavLink to={'/honor'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.honor')}</li></NavLink>
          <NavLink to={'/redmi'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.redmi')}</li></NavLink>
          <NavLink to={'/poco'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.poco')}</li></NavLink>
          <NavLink to={'/infinix'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.infinix')}</li></NavLink>
          <NavLink to={'/tecno'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.tecno')}</li></NavLink>
          <NavLink to={'/vivo'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.vivo')}</li></NavLink>
          <NavLink to={'/nokia'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Phones.nokia')}</li></NavLink>
        </ul>
      </article>

      {/* Computers */}
      <article>
        <NavLink to={'/computers'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><LuMonitorSpeaker />{t('Katalog.Komputer.allkomputer')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/allofis'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.office')}</li></NavLink>
          <NavLink to={'/acercomp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.acer')}</li></NavLink>
          <NavLink to={'/qubitcomp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.qubit')}</li></NavLink>
          <NavLink to={'/gamecomp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.gamers')}</li></NavLink>
          <NavLink to={'/qurilmacomp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.peripherals')}</li></NavLink>
          <NavLink to={'/arzoncomp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Komputer.cheap')}</li></NavLink>
        </ul>
      </article>

      {/* Laptops */}
      <article>
        <NavLink to={'/laptops'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><IoLaptopOutline />{t('Katalog.Laptops.alllaptop')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/acer'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.acer')}</li></NavLink>
          <NavLink to={'/lenovo'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.lenovo')}</li></NavLink>
          <NavLink to={'/hp'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.hp')}</li></NavLink>
          <NavLink to={'/dell'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.dell')}</li></NavLink>
          <NavLink to={'/net'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.netbok')}</li></NavLink>
          <NavLink to={'/asus'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.asus')}</li></NavLink>
          <NavLink to={'/mac'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Laptops.mac')}</li></NavLink>
        </ul>
      </article>

      {/* Games */}
      <article>
        <NavLink to={'/game'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><PiGameController />{t('Katalog.Games.allgame')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/gamemause'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.sichqoncha')}</li></NavLink>
          <NavLink to={'/gamekeyboard'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.klaviatura')}</li></NavLink>
          <NavLink to={'/joystik'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.joystik')}</li></NavLink>
          <NavLink to={'/headphone'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.quloqchin')}</li></NavLink>
          <NavLink to={'/chair'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.orindiq')}</li></NavLink>
          <NavLink to={'/mikrafon'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Games.mikrafon')}</li></NavLink>
        </ul>
      </article>

      {/* TV */}
      <article>
        <NavLink to={'/tv'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><MdConnectedTv />{t('Katalog.Televizor.alltv')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/smartTv'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.smart')}</li></NavLink>
          <NavLink to={'/TVkabel'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.kabel')}</li></NavLink>
          <NavLink to={'/TVpult'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.pult')}</li></NavLink>
          <NavLink to={'/cheaptv'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.arzon')}</li></NavLink>
          <NavLink to={'/TVantena'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.antena')}</li></NavLink>
          <NavLink to={'/TVtyuner'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Televizor.tyuner')}</li></NavLink>
        </ul>
      </article>

      {/* Tablets */}
      <article>
        <NavLink to={'/tablet'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><BsTablet />{t('Katalog.Planshetlar.alltablet')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/tabletchexol'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Planshetlar.gilof')}</li></NavLink>
          <NavLink to={'/tabletipad'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Planshetlar.ipad')}</li></NavLink>
          <NavLink to={'/tabletkuller'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Planshetlar.kuller')}</li></NavLink>
          <NavLink to={'/elektrbook'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Planshetlar.elektrbook')}</li></NavLink>
          <NavLink to={'/sensorpen'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Planshetlar.pen')}</li></NavLink>
        </ul>
      </article>

      {/* Smartwatch */}
      <article>
        <NavLink to={'/watch'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><BsSmartwatch />{t('Katalog.Smartwatch.allwatch')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/kids'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Smartwatch.kids')}</li></NavLink>
          <NavLink to={'/tasma'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Smartwatch.tasma')}</li></NavLink>
          <NavLink to={'/gilof'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Smartwatch.gilof')}</li></NavLink>
        </ul>
      </article>

      {/* Maishiy texnika */}
      <article>
        <NavLink to={'/texnika'} onClick={() => setkatalog(false)}>
          <h3 className="text-blue-700 dark:text-white text-[23px] cursor-pointer hover:text-blue-800 dark:hover:text-blue-400 flex items-center gap-[5px]"><FaHouseDamage />{t('Katalog.Maishiy.allmaishiy')}</h3>
        </NavLink>
        <ul className="text-gray-600 dark:text-gray-300">
          <NavLink to={'/muzlatkich'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Maishiy.muzlatkich')}</li></NavLink>
          <NavLink to={'/air'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Maishiy.konditsioner')}</li></NavLink>
          <NavLink to={'/pech'} onClick={() => setkatalog(false)}><li className="cursor-pointer hover:text-gray-800 dark:hover:text-white">{t('Katalog.Maishiy.pech')}</li></NavLink>
        </ul>
      </article>
    </article>
  </article>
)}
      </div> 

      
    
    </>
  )
}
