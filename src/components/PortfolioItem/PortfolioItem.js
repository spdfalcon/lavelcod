import React from 'react'
import BtnRounded from '../BtnRounded/BtnRounded'

export default function PortfolioItem({ img1, img2, img3 }) {
    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex justify-center items-center'>
                <div className='-translate-x-5'><img src={img1} /></div>
                <div className='z-10'><img src={img2} /></div>
                <div className='translate-x-5'><img src={img3} /></div>
            </div>
            <div className='w-40'>
            <BtnRounded bg={false} title={`مشاهده`}></BtnRounded>
            </div>
        </div>
    )
}
