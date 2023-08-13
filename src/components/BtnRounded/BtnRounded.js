import React from 'react'

export default function BtnRounded({ bg, title, width, Height }) {
    return (
        <div>
            <div className={`flex justify-center items-center text-sm font-dana-font border-2 rounded-ss-[20px] rounded-ee-[20px] border-main-blue p-3 ${bg ? `bg-main-blue text-main-text-white` : `bg-main-text-white`}`} >{title}</div>
        </div>
    )
}
