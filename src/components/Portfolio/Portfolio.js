import React from 'react'
import BtnRounded from '../BtnRounded/BtnRounded'
import PortfolioItem from '../PortfolioItem/PortfolioItem'

export default function Portfolio() {
  return (
    <div className=' w-full px-32 flex flex-col items-center -translate-y-36'>
      <div className='top w-4/5 bg-white rounded-se-[100px] rounded-ss-[100px] flex justify-evenly p-5 px-10 translate-y-7 text-main-blue gap-5'>
        <div className='basis-1/2'>
          <BtnRounded bg={true} title={`نمونه کار طراحی سایت`}></BtnRounded>
        </div>
        <div className='basis-1/2'>
          <BtnRounded bg={false} title={`نمونه کار طراحی فروشگاه اینترنتی`}></BtnRounded>
        </div>
        <div className='basis-1/2'>
          <BtnRounded bg={false} title={`نمونه کار طراحی اپلیکیشن`}></BtnRounded>
        </div>
      </div>





      <div className='dawn bg-white flex px-10 flex-col py-20 rounded-[30px] shadow-xl'>
        <div className='up flex justify-center w-full'>
          <div className='m flex-1'>
            <div className='flex flex-col items-center'>
              <h2 className='font-semibold text-xl'>مشاهده برجسته ترین نمونه کار طراحی سایت لاول کد</h2>
              <img className='mt-2' src="/images/main/under-blue.png" alt="" />
            </div>
          </div>
          <div className='l'>
            <BtnRounded icon={'arrow'} bg={true} title={`نمونه کار طراحی اپلیکیشن`}></BtnRounded>
          </div>
        </div>







        <div className='down flex gap-5 mt-10'>
          <PortfolioItem img1={`images/best-portfolio/project1-1.png`} img2={`images/best-portfolio/project1-2.png`} img3={`images/best-portfolio/project1-3.png`}></PortfolioItem>
          <PortfolioItem img1={`images/best-portfolio/project2-1.png`} img2={`images/best-portfolio/project2-2.png`} img3={`images/best-portfolio/project2-3.png`}></PortfolioItem>
          <PortfolioItem img1={`images/best-portfolio/project3-1.png`} img2={`images/best-portfolio/project3-2.png`} img3={`images/best-portfolio/project3-3.png`}></PortfolioItem>
        </div>
      </div>
    </div>
  )
}
