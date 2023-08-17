import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFolder } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsPatchExclamation } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { BiPhoneCall } from 'react-icons/bi'
export default function NavBar() {
  return (
    <div className=''>
      <div className='parent flex items-center  bg-white px-10 py-4 rounded-xl justify-between'>
        <div className='logo flex justify-center items-center'>
          <a className='w-full' href="#">
            <img src="./images/main/logo.png" alt="logo" />
          </a>
        </div>
        <div className='mid font-dana-font'>
          <ul className='flex gap-1 text-sm'>
            <li className='flex rounded-md items-center gap-1 text-main-blue'> <a className='w-full flex items-center px-4 py-2 gap-1' href="#"><AiOutlineHome></AiOutlineHome>صفحه اصلی</a></li>
            <li className='flex rounded-md items-center gap-1'> <a className='w-full flex items-center px-4 py-2 gap-1' href="#"><AiOutlineFolder></AiOutlineFolder>نمونه کارها</a></li>
            <li className='flex rounded-md items-center gap-1'> <a className='w-full flex items-center px-4 py-2 gap-1' href="#"><BsPatchExclamation></BsPatchExclamation>درباره ما</a></li>
            <li className='flex rounded-md items-center gap-1'> <a className='w-full flex items-center px-4 py-2 gap-1' href="#"><AiOutlinePhone></AiOutlinePhone>تماس با ما</a></li>
          </ul>
        </div>
        <div className='l flex items-center gap-4'>
          <a href='#' className='flex items-center gap-1 font-dana-font'>
            <a className='w-full' href="#">952761(021) - 713458(021)</a>
            <div className='text-xl'>
              <BiPhoneCall></BiPhoneCall>
            </div>
          </a>
          <div className='font-ray-font flex items-center bg-main-blue text-main-text-white rounded-xl px-4 py-3'><a className='w-full' href="#">ورود / عضویت</a> <BiLogOut></BiLogOut> </div>
        </div>
      </div>
    </div>
  )
}
