
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { useTranslation } from 'react-i18next'
import Footer from './components/Footer'
import Phonefilter from './filterpage/filterphone/Phonefilter'
import Complaptopfilter from './filterpage/filtercomp/Complaptopfilter'
import Tablet from './filterpage/filtertablet/Tablet'
import Smartwatch from './filterpage/filterwatch/Smartwatch'
import Filterheadphone from './filterpage/filterheadphone/Filterheadphone'
import Gamefitler from './filterpage/filtergame/Gamefitler'
import Computerfilter from './filterpage/filtercomputer/Computerfilter'
import Laptopfilter from './filterpage/laptopsfilter/Laptopfilter'
import Tvfilter from './filterpage/filtertv/Tvfilter'
import Texnikafilter from './filterpage/filtertexnika/Texnikafilter'
import Alldatafilter from './filterpage/alldatafilter/Alldatafilter'
import Ofisfilter from './filterpage/ofisfilter/Ofisfilter'
import Samsung from './filterpage/filterphone/childfiterphone/Samsung'
import Honor from './filterpage/filterphone/childfiterphone/Honor'
import Redmi from './filterpage/filterphone/childfiterphone/Redmi'
import Poco from './filterpage/filterphone/childfiterphone/Poco'
import Infinix from './filterpage/filterphone/childfiterphone/Infinix'
import Tecno from './filterpage/filterphone/childfiterphone/Tecno'
import Vivo from './filterpage/filterphone/childfiterphone/Vivo'
import Nokia from './filterpage/filterphone/childfiterphone/Nokia'
import Iphone from './filterpage/filterphone/childfiterphone/Iphone'
import Acercomp from './filterpage/filtercomputer/childkompfilter/Acercomp'
import Qubitcomp from './filterpage/filtercomputer/childkompfilter/Qubitcomp'
import Gamecomp from './filterpage/filtercomputer/childkompfilter/Gamecomp'
import Tashqicomp from './filterpage/filtercomputer/childkompfilter/Tashqicomp'
import Cheapcomp from './filterpage/filtercomputer/childkompfilter/Cheapcomp'
import Acer from './filterpage/laptopsfilter/childlaptopfilter/Acer'
import Lenovo from './filterpage/laptopsfilter/childlaptopfilter/Lenovo'
import Hp from './filterpage/laptopsfilter/childlaptopfilter/Hp'
import Dell from './filterpage/laptopsfilter/childlaptopfilter/Dell'
import Net from './filterpage/laptopsfilter/childlaptopfilter/Net'
import Asus from './filterpage/laptopsfilter/childlaptopfilter/Asus'
import Mac from './filterpage/laptopsfilter/childlaptopfilter/Mac'
import Gamecursor from './filterpage/filtergame/childgame/Gamecursor'
import Gamekeyboard from './filterpage/filtergame/childgame/Gamekeyboard'
import Joystik from './filterpage/filtergame/childgame/Joystik'
import Chear from './filterpage/filtergame/childgame/Chear'
import Gilamcha from './filterpage/filtergame/childgame/Gilamcha'
import Smarttv from './filterpage/filtertv/childtv/Smarttv'
import Kabel from './filterpage/filtertv/childtv/Kabel'
import Pult from './filterpage/filtertv/childtv/Pult'
import CheapTV from './filterpage/filtertv/childtv/CheapTV'
import Antena from './filterpage/filtertv/childtv/Antena'
import Tuner from './filterpage/filtertv/childtv/Tuner'
import Gilof from './filterpage/filtertablet/childtablet/Gilof'
import Ipad from './filterpage/filtertablet/childtablet/Ipad'
import Kuller from './filterpage/filtertablet/childtablet/Kuller'
import Book from './filterpage/filtertablet/childtablet/Book'
import Pen from './filterpage/filtertablet/childtablet/Pen'
import Smart from './filterpage/filterwatch/childwatch/Smart'
import Tasma from './filterpage/filterwatch/childwatch/Tasma'
import Ice from './filterpage/filtertexnika/childtexnika/Ice'
import Air from './filterpage/filtertexnika/childtexnika/Air'
import Pech from './filterpage/filtertexnika/childtexnika/Pech'
import Skeleton from './skleton/HomeSkeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import HomeSkeleton from './skleton/HomeSkeleton'
import Layout from './components/Layout'

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/phone',
          element:<Phonefilter/>
        },
        {
          path:'/compslaptops',
          element:<Complaptopfilter/>
        },
        {
          path:'/tablet',
          element:<Tablet/>
        },
        {
          path:'/watch',
          element:<Smartwatch/>
        },
        {
          path:'/headphone',
          element:<Filterheadphone/>
        },
        {
          path:'/game',
          element:<Gamefitler/>
        },
        {
          path:'/computers',
          element:<Computerfilter/>
        },
        {
          path:'/laptops',
          element:<Laptopfilter/>
        },
        {
          path:'/tv',
          element:<Tvfilter/>
        },
        {
          path:'/texnika',
          element:<Texnikafilter/>
        },
        {
          path:'/all',
          element:<Alldatafilter/>
        },
        {
          path:'/allofis',
          element:<Ofisfilter/>
        },
        {
          path:'/samsung',
          element:<Samsung/>
        },
        {
          path:'/honor',
          element:<Honor/>
        },
        {
          path:'/redmi',
          element:<Redmi/>
        },
        {
          path:'/poco',
          element:<Poco/>
        },
        {
          path:'/iphone',
          element:<Iphone/>
        },
        {
          path:'/infinix',
          element:<Infinix/>
        },
        {
          path:'/tecno',
          element:<Tecno/>  
        },
        {
          path:'/vivo',
          element:<Vivo/>
        },
        {
          path:'/nokia',
          element:<Nokia/>  
        },
        {
          path:'/acercomp',
          element:<Acercomp/>
        },
        {
          path:'/qubitcomp',
          element:<Qubitcomp/>
        },
        {
          path:'/gamecomp',
          element:<Gamecomp/>
        },
        {
          path:'/qurilmacomp',
          element:<Tashqicomp/>
        },
        {
          path:'/arzoncomp',
          element:<Cheapcomp/>
        },
        {
          path:'/acer',
          element:<Acer/>
        },
        {
          path:'/lenovo',
          element:<Lenovo/>
        },
        {
          path:'/hp',
          element:<Hp/>
        },
        {
          path:'/dell',
          element:<Dell/>
        },
        {
          path:'/net',
          element:<Net/>
        },
        {
          path:'/asus',
          element:<Asus/>
        },
        {
          path:'/mac',
          element:<Mac/>
        },
        {
          path:'/gamemause',
          element:<Gamecursor/>
        },
        {
          path:'/gamekeyboard',
          element:<Gamekeyboard/>
        },
        {
          path:'/joystik',
          element:<Joystik/>
        },
        {
          path:'/chair',
          element:<Chear/>

        },
        {
          path:'/mikrafon',
          element:<Gilamcha/>
        },
        {
          path:'/smartTv',
          element:<Smarttv/>
        },
        {
          path:'/TVkabel',
          element:<Kabel/>
        },
        {
          path:'/TVpult',
          element:<Pult/>
        },
        {
          path:'/cheaptv',
          element:<CheapTV/>
        },
        {
          path:'/TVantena',
          element:<Antena/>
        },
        {
          path:'/TVtyuner',
          element:<Tuner/>
        },
        {
          path:'/tabletchexol',
          element:<Gilof/>
        },
        {
          path:'/tabletipad',
          element:<Ipad/>
        },
        {
          path:'/tabletkuller',
          element:<Kuller/>
        },
        {
          path:'/elektrbook',
          element:<Book/>
        },
        {
          path:'/sensorpen',
          element:<Pen/>
        },
        {
          path:'/kids',
          element:<Smart/>
        },
        {
          path:'/tasma',
          element:<Tasma/>
        },
        {
          path:'/chexol',
          element:<Gilof/>
        },
        {
          path:'/muzlatkich',
          element:<Ice/>
        },
        {
          path:'/air',
          element:<Air/>
        },
        {
          path:'/pech',
          element:<Pech/>
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
