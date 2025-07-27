import React, { useEffect, useState } from 'react'
import { IoEarth } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { PiSunFill } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { IoLaptopOutline } from "react-icons/io5";
import { PiGameController } from "react-icons/pi";
import { MdConnectedTv } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { BsTablet } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import HomeSkeleton from '../skleton/HomeSkeleton';
export default function Navbar({cartItems}) {
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


  return (
    <>
    
      
    <div className=' w-full bg-gray-100 py-[3px] dark:bg-[#80808066]'>
      <nav className='max-w-[1200px] m-auto flex justify-between items-center'>
        <button  className=' flex items-center py-[2px] px-[5px]  border-[1px] border-[gray] rounded-[8px] '><IoEarth className=' dark:text-white'/><select className='bg-transparent text-blue-950 font-medium border-none outline-none cursor-pointer  dark:text-blue-300  ' value={language} onChange={handleLanguageChange} > <option  className=' font-medium dark:bg-black' value="uz">UZB</option> <option className=' font-medium dark:bg-black' value="ru">RUS</option> <option className=' font-medium dark:bg-black' value="en">ENG</option> </select></button>

        
        <ul className='flex gap-[30px] text-gray-500 '>
          <NavLink to={'/'}>
            <li className=' cursor-pointer hover:text-black transition-all duration-150 dark:text-gray-400 dark:hover:text-white'> {t("li1")} </li>
          </NavLink>
          <NavLink to={'/shop'}>
            <li className=' cursor-pointer hover:text-black transition-all duration-150 dark:text-gray-400 dark:hover:text-white'>{t("li2")}</li>
          </NavLink>
          <NavLink to={'/about'}>
            <li className=' cursor-pointer hover:text-black transition-all duration-150 dark:text-gray-400 dark:hover:text-white'>{t("li3")}</li>
          </NavLink>
          <NavLink to={'/aswer'}>
            <li className=' cursor-pointer hover:text-black transition-all duration-150 dark:text-gray-400 dark:hover:text-white'>{t("li4")}</li>
          </NavLink>
          <NavLink to={'/contact'}>
            <li className=' cursor-pointer hover:text-black transition-all duration-150 dark:text-gray-400 dark:hover:text-white'>{t("li5")}</li>
          </NavLink>
        </ul>
        <button onClick={toggleDarkMode}>{darkMode?  < PiSunFill className='text-[20px] text-white'/>:<BsMoonStarsFill/> }</button>                    
      </nav>
    </div>
    <nav cartItems={cartItems} className=' max-w-[1200px] m-auto flex justify-between items-center py-[12px] relative'>
      <Link to={'/'}>
        <img  className=' w-[160px] cursor-pointer' src="/logos/zamonshop_logo_clean.png" alt="" />
      </Link>
        <button onClick={()=> setkatalog(true)} className=' py-[6px] px-[15px] flex bg-blue-100 items-center gap-2 rounded-md font-medium text-blue-600 transition-all duration-150 hover:bg-blue-200 dark:bg-blue-600 dark:text-blue-100 dark:hover:bg-blue-500'>
            {t('SecondNav.katalog')}
            <CiMenuFries className=''/>
        </button>
        
        <article className=' flex border-[1px] border-gray-400 rounded-md items-center overflow-hidden '>
            <input className=' w-[300px] py-[6px] outline-none px-[10px] dark:bg-transparent' type="text" placeholder={t('SecondNav.inputp')}/>
            <article className=' h-[36px] bg-gray-200 text-gray-600 px-[10px] flex items-center dark:bg-[#80808030]'>
                <FiSearch className=' dark:text-white'/>
            </article>
        </article>
        <NavLink to={'/savedproduct'}>

        <button className=' flex items-center gap-1 font-medium dark:text-white '>
            <FaRegHeart className='text-[20px]'/>
            {t('SecondNav.like')}
        </button>
        </NavLink>
        <button className=' flex items-center gap-1 font-medium dark:text-white'>
            <FaRegUser className='text-[20px]'/>
            {t('SecondNav.profil')}
        </button> 
       <NavLink to={'/card'}>
  <button className='relative flex items-center gap-1 font-medium dark:text-white'>
    <MdOutlineShoppingCart className='text-[22px]' />
    {t('SecondNav.card')}
    {cartItems.length > 0 && (
      <span className='absolute top-1px -right-5 bg-[blue] text-white text-[12px] px-1.5 rounded-[5px]'>
        {cartItems.length}
      </span>
    )}
  </button>
</NavLink>


    </nav>
    <nav className=' max-w-[1200px] m-auto flex justify-start gap-5 mb-[10px]'>
      <NavLink to={'/phone'}  ><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.phone')}</button></NavLink>
      <NavLink to={'/compslaptops'}  ><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.laptops')}</button></NavLink>        
      <NavLink to={'/tablet'} ><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.teblet')}</button></NavLink>
      <NavLink to={'/watch'}><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.watch')}</button></NavLink>
      <NavLink to={'/headphone'}><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.headphone')}</button></NavLink>
      <NavLink to={'/game'}><button className='py-[6px] px-[12px] transition-all duration-150 hover:bg-gray-200 text-gray-600 rounded-md font-medium dark:text-gray-200 dark:hover:bg-[#8080805a]'>{t('Thirdnav.game')}</button></NavLink>  
        
    </nav>
    {katalog && (
    <article data-aos="fade-down" data-aos-easing='linear' data-aos-duration='200' className=' max-w-[1200px] m-auto bg-gray-100 p-[20px] rounded-xl absolute  right-0 left-0 z-40 top-[105px]'>
      <article className=' w-full flex justify-between items-start'>
        <h2 className=' text-blue-900 text-[30px] mb-[24px]'>{t('Katalog.All')}</h2>
      <article onClick={()=> setkatalog(false)} className=' p-[8px] bg-blue-200 rounded-xl cursor-pointer'><MdClose  className='  text-[20px] text-blue-700 cursor-pointer' /></article>
      </article>
      <article className=' relative grid grid-cols-4 justify-between items-start gap-y-7'>
        <article>
        <NavLink to={'/phone'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer transition-all duration-150 hover:text-blue-800 flex items-center gap-[5px]'><HiOutlineDevicePhoneMobile/>{t('Katalog.Phones.allphone')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/samsung'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.samsung')}</li></NavLink>
            <NavLink to={'/iphone'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.apple')}</li></NavLink>
            <NavLink to={'/honor'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.honor')}</li></NavLink>
            <NavLink to={'/redmi'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.redmi')}</li></NavLink>
            <NavLink to={'/poco'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.poco')}</li></NavLink>
            <NavLink to={'/infinix'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.infinix')}</li></NavLink>
            <NavLink to={'/tecno'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.tecno')}</li></NavLink>
            <NavLink to={'/vivo'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.vivo')}</li></NavLink>
            <NavLink to={'/nokia'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Phones.nokia')}</li></NavLink>
            
          </ul>
        </article>
        <article>
          <NavLink to={'/computers'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><LuMonitorSpeaker/>{t('Katalog.Komputer.allkomputer')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/allofis'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.office')}</li></NavLink>
            <NavLink to={'/acercomp'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.acer')}</li></NavLink>
            <NavLink to={'/qubitcomp'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.qubit')}</li></NavLink>
            <NavLink to={'/gamecomp'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.gamers')}</li></NavLink>
            <NavLink to={'/qurilmacomp'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.peripherals')}</li></NavLink>
            <NavLink to={'/arzoncomp'} onClick={()=> setkatalog(false)} ><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Komputer.cheap')}</li></NavLink>
            
          </ul>
        </article>
        <article>
          <NavLink to={'/laptops'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><IoLaptopOutline/>{t('Katalog.Laptops.alllaptop')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/acer'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.acer')}</li></NavLink>
            <NavLink to={'/lenovo'} onClick={()=> setkatalog(false)} ><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.lenovo')}</li></NavLink>
            <NavLink to={'/hp'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.hp')}</li></NavLink>
            <NavLink to={'/dell'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.dell')}</li></NavLink>
            <NavLink to={'/net'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.netbok')}</li></NavLink>
            <NavLink to={'/asus'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.asus')}</li></NavLink>
            <NavLink to={'/mac'} onClick={()=> setkatalog(false)} ><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Laptops.mac')}</li></NavLink>
            
          </ul>
        </article>
        <article>
          <NavLink to={'/game'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><PiGameController/> {t('Katalog.Games.allgame')} </h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/gamemause'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.sichqoncha')}</li></NavLink>
            <NavLink to={'/gamekeyboard'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.klaviatura')}</li></NavLink>
            <NavLink to={'/joystik'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.joystik')}</li></NavLink>
            <NavLink to={'/headphone'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.quloqchin')}</li></NavLink>
            <NavLink to={'/chair'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.orindiq')}</li></NavLink>
            <NavLink to={'/mikrafon'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Games.mikrafon')}</li></NavLink>
            
            
          </ul>
        </article>
        <article>
          <NavLink to={'/tv'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><MdConnectedTv/>{t('Katalog.Televizor.alltv')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/smartTv'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.smart')}</li></NavLink>
            <NavLink to={'/TVkabel'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.kabel')}</li></NavLink>
            <NavLink to={'/TVpult'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.pult')}</li></NavLink>
            <NavLink to={'/cheaptv'} onClick={()=> setkatalog(false)} ><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.arzon')}</li></NavLink>
            <NavLink to={'/TVantena'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.antena')}</li></NavLink>
            <NavLink to={'/TVtyuner'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Televizor.tyuner')}</li></NavLink>
            
          </ul>
        </article>
        <article>
          <NavLink to={'/tablet'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'> <BsTablet/>{t('Katalog.Planshetlar.alltablet')}</h3></NavLink>
          <ul className=' text-gray-600'>
            <NavLink to={'/tabletchexol'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Planshetlar.gilof')}</li></NavLink>
            <NavLink to={'/tabletipad'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Planshetlar.ipad')}</li></NavLink>
            <NavLink to={'/tabletkuller'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Planshetlar.kuller')}</li></NavLink>
            <NavLink to={'/elektrbook'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Planshetlar.elektrbook')}</li></NavLink>
            <NavLink to={'/sensorpen'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Planshetlar.pen')}</li></NavLink>
            
          </ul>
        </article>
        <article>
          <NavLink to={'/watch'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><BsSmartwatch/>{t('Katalog.Smartwatch.allwatch')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/kids'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Smartwatch.kids')}</li></NavLink>
            <NavLink to={'/tasma'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Smartwatch.tasma')}</li> </NavLink>
            <NavLink to={'/gilof'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Smartwatch.gilof')}</li></NavLink>
            
            
          </ul>
        </article>
        <article>
          <NavLink to={'/texnika'} onClick={()=> setkatalog(false)}><h3 className=' text-blue-700 text-[23px] cursor-pointer hover:text-blue-800 flex items-center gap-[5px]'><FaHouseDamage/>{t('Katalog.Maishiy.allmaishiy')}</h3></NavLink>
          
          <ul className=' text-gray-600'>
            <NavLink to={'/muzlatkich'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Maishiy.muzlatkich')}</li></NavLink>
            <NavLink to={'/air'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Maishiy.konditsioner')}</li></NavLink>
            <NavLink to={'/pech'} onClick={()=> setkatalog(false)}><li className=' cursor-pointer hover:text-gray-800'>{t('Katalog.Maishiy.pech')}</li></NavLink>
            
          </ul>
        </article>
        
        
      </article>
    </article>
    )}
    
      
    
    </>
  )
}
