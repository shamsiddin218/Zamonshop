import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className=' w-full bg-blue-100'>
      <div className=' max-w-[1200px] m-auto flex justify-between items-start p-[25px]'>
           <img  className=' w-[160px] cursor-pointer' src="../../public/logos/zamonshop_logo_clean.png" alt="" />
        <article>
            <ul>
                <li className=' text-[20px] font-medium mb-[14px]'>Foydalanuvchilarga</li>
                <li className=' text-gray-700 cursor-pointer hover:text-[blue]'>Biz haqimizda</li>
                <li className=' text-gray-700 cursor-pointer hover:text-[blue]'>Biz bilan bog'lanish</li>
                <li className=' text-gray-700 cursor-pointer hover:text-[blue]'>Savol-javob</li>
            </ul>
        </article>
        <article>
            <h4 className=' text-[20px] font-medium mb-[14px]'>Bizning ijtimoiy tarmoqlarimiz</h4>
            <article className=' flex justify-start gap-[20px]'>
                <article className='p-[5px] bg-blue-800 rounded-md transition-all duration-150 cursor-pointer hover:bg-[blue]'>
                <FaTelegramPlane className='text-[28px] text-white'/>
                </article>
                <article className='p-[5px] bg-blue-800 rounded-md transition-all duration-150 cursor-pointer hover:bg-[blue]'>
                <FaInstagram className='text-[28px] text-white'/>
                </article>
                <article className='p-[5px] bg-blue-800 rounded-md transition-all duration-150 cursor-pointer hover:bg-[blue]'>
                <FaFacebook className='text-[28px] text-white'/>
                </article>
                <article className='p-[5px] bg-blue-800 rounded-md transition-all duration-150 cursor-pointer hover:bg-[blue]'>
                <VscGithubInverted className='text-[28px] text-white'/>
                </article>
            </article>
        </article>
        <article className=' bg-[#80808020] px-[25px] py-[10px] rounded-md'>
            <h4 className=' text-[20px] font-medium mb-[14px]'>Qo'ng'iroq markazi</h4>
            <article className=' flex justify-start items-center gap-[15px] mb-[13px]'>
                <article className='p-[5px] bg-[blue] rounded-md '>
                    <IoCallSharp className='text-[28px] text-white'/>
                </article>
                <article>
                    <h5 className=' font-normal text-gray-700'>Telefon raqam</h5>
                    <p className=' font-medium text-[blue]'>+998 88 386 69 09</p>
                </article>
            </article>
            <article className=' flex justify-start items-center gap-[15px]'>
                <article className=' p-[5px] bg-[blue] rounded-md'>
                    <MdEmail className=' text-[28px] text-white'/>
                </article>
                <article>
                    <h5 className=' font-normal text-gray-700'>Email</h5>
                    <p className=' font-medium text-[blue]'>sirojiddins881@gmail.com</p>
                </article>
            </article>
        </article>
        
      </div>
      
    </div>
  )
}
