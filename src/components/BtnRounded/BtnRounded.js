import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlinePhone } from 'react-icons/ai'

export default function BtnRounded({ bg, title, icon }) {
    return (
        <div>
            <a href='#' className={` gap-2 duration-300 flex justify-center items-center text-sm font-dana-font border-2 rounded-ss-[20px] rounded-ee-[20px] border-main-blue p-3 ${bg ? `bg-main-blue text-main-text-white hover:bg-white hover:text-main-blue` : `bg-main-text-white hover:bg-main-blue hover:text-white`}`} >
                {title}
                <div className='text-xl'>
                    {icon === 'arrow' ? (
                        <BiArrowBack></BiArrowBack>
                    ) : icon === 'glass' ? (
                        <HiMagnifyingGlass></HiMagnifyingGlass>
                    ) : icon === 'phone' ? (
                        <AiOutlinePhone></AiOutlinePhone>
                    ) : (
                        <></>
                    )}
                </div>
            </a>
        </div>
    )
}
