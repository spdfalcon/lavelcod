import React from "react";
import "./Header.css";
import NavBar from '../NavBar/NavBar'
export default function Header() {
  return (
    <div className="w-full h-auto relative flex justify-center ">
      <div className="fixed z-10 top-4 w-full px-20">
        <NavBar></NavBar>
      </div>
      <img
        className="w-full h-auto object-cover"
        src="/images/main/bg-header.png"
        alt="header"
      />
      <div className="w-full h-full bg-main-blue absolute top-0 right-0 opacity-[90%]"></div>
      <div className="w-[79vw] h-auto absolute top-[15vh] flex justify-between items-center text-white">
        <div className="w-[43vw] h-auto">
          <h1 className="font-ray-font text-[35px]">شرکت نرم افزاری لاول کد</h1>
          <p className="font-dana-font text-17px">
            متخصص ایجاد کسب و کاربر بستر اینترنت
          </p>
          <img
            className="mr-20 mt-3 mb-3 object-cover"
            src="/images/main/under-white.png"
            alt=""
          />
          <span className="font-dana-font text-[18px]">
            شرکت نرم افزاری لاول کد فعال در عرصه خدماتی همچون طراحی وبسایت، سئو
            و بهینه سازی، طراحی اپلیکیشن های موبایلی و نرم افزار های تحت وب و
            ارائه دیگر خدمات در حوزه نرم افزار در تلاش است تا تمام نیازهای
            کاربران در زمینه آنلاین سازی کسب و کار به بهترین شکل ممکن و
            بهره‌گیری از جدیدترین استانداردها و اصول روز در حداقل زمان و با
            کمترین هزینه پوشش دهد.
          </span>
        </div>
        <img src="/images/vectors/header-img.png" alt="vector" />
      </div>
    </div>
  );
}
