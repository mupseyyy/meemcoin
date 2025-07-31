"use client";

import React from "react";

const FigmaHeader = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="flex w-full h-auto px-6 py-3.5 items-center justify-between relative rounded-full border-2 border-black bg-red-600 shadow-[6px_6px_0_0_#000] backdrop-blur-md">
        {/* Logo Section */}
        <div className="flex justify-end items-center gap-2 relative">
          <img 
            className="w-10 h-10 rounded-full border-2 border-black shadow-sm"
            src="https://api.builder.io/api/v1/image/assets/TEMP/c274d09705f223b4e11ce1e0489b8ddb01ef50f5?width=80" 
            alt="MOMO Icon" 
          />
          <div className="flex pb-0.5 flex-col items-start">
            <div className="flex w-full h-11 flex-col justify-center text-black font-['Luckiest_Guy'] text-2xl font-normal leading-8 tracking-[0.6px] relative">
              <span>KITTY</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-start gap-8">
          <div className="flex flex-col items-start self-stretch relative">
            <div className="text-black font-inter text-sm font-semibold leading-5 relative">
              <span>About</span>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <div className="text-black font-inter text-sm font-semibold leading-5 relative">
              <span>Contract</span>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <div className="text-black font-inter text-sm font-semibold leading-5 relative">
              <span>Tokenomics</span>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <div className="text-black font-inter text-sm font-semibold leading-5 relative">
              <span>How to buy</span>
            </div>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="flex h-10 items-start gap-4 md:gap-8">
          {/* TikTok Icon */}
          <svg className="w-6 h-6 md:w-9 md:h-9" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 12.3025C32.051 12.3087 29.1744 11.504 26.7764 10.0021V20.4767C26.7756 22.4167 26.0979 24.3102 24.8339 25.9041C23.57 27.498 21.78 28.7163 19.7033 29.396C17.6267 30.0758 15.3623 30.1846 13.2131 29.708C11.0638 29.2313 9.13208 28.1919 7.67619 26.7288C6.22029 25.2656 5.30963 23.4484 5.06596 21.5201C4.82229 19.5919 5.25724 17.6445 6.31263 15.9384C7.36803 14.2323 8.99358 12.8487 10.9719 11.9728C12.9502 11.0968 15.1871 10.7702 17.3833 11.0366V16.3049C16.3783 16.0283 15.2991 16.0366 14.2999 16.3287C13.3006 16.6208 12.4324 17.1816 11.8191 17.9312C11.2059 18.6808 10.8791 19.5807 10.8853 20.5025C10.8915 21.4243 11.2304 22.3208 11.8537 23.064C12.477 23.8072 13.3527 24.3591 14.3558 24.6409C15.3589 24.9226 16.4381 24.9198 17.4393 24.6329C18.4405 24.3459 19.3125 23.7895 19.9308 23.0431C20.549 22.2967 20.8819 21.3985 20.8818 20.4767V0H26.7764C26.7723 0.435544 26.814 0.870494 26.901 1.29935C27.1058 2.25671 27.5317 3.16745 28.1526 3.97585C28.7735 4.78425 29.5764 5.47333 30.5121 6.00093C31.8433 6.7711 33.4041 7.1816 35 7.18131V12.3025Z" fill="black"/>
          </svg>
          
          {/* X (Twitter) Icon */}
          <svg className="w-5 h-5 md:w-7 md:h-7 fill-black" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6271 0H28.2272L18.1775 12.7084L30 30H20.7425L13.4921 19.5135L5.19485 30H0.592205L11.3411 16.4082L0 0H9.49185L16.0456 9.58625L23.6271 0ZM22.0122 26.9539H24.5619L8.10749 2.88686H5.37188L22.0122 26.9539Z" fill="black"/>
          </svg>
          
          {/* Instagram Icon */}
          <svg className="w-5 h-5 md:w-7 md:h-7 fill-black" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0033 7.30838C10.7468 7.30838 7.31344 10.7425 7.31344 15C7.31344 19.2575 10.7468 22.6916 15.0033 22.6916C19.2599 22.6916 22.6933 19.2575 22.6933 15C22.6933 10.7425 19.2599 7.30838 15.0033 7.30838ZM15.0033 20.0006C12.2526 20.0006 10.0039 17.758 10.0039 15C10.0039 12.242 12.246 9.99944 15.0033 9.99944C17.7607 9.99944 20.0028 12.242 20.0028 15C20.0028 17.758 17.754 20.0006 15.0033 20.0006ZM24.8014 6.99375C24.8014 7.99119 23.9983 8.7878 23.0078 8.7878C22.0106 8.7878 21.2142 7.98449 21.2142 6.99375C21.2142 6.00301 22.0173 5.19971 23.0078 5.19971C23.9983 5.19971 24.8014 6.00301 24.8014 6.99375ZM29.8946 8.81457C29.7808 6.41136 29.232 4.28261 27.4718 2.52873C25.7183 0.774852 23.5901 0.225929 21.1874 0.105433C18.7111 -0.0351445 11.2889 -0.0351445 8.8126 0.105433C6.41662 0.219235 4.28834 0.768158 2.52816 2.52203C0.767987 4.27591 0.225878 6.40466 0.10541 8.80788C-0.0351366 11.2847 -0.0351366 18.7086 0.10541 21.1854C0.219186 23.5886 0.767987 25.7174 2.52816 27.4713C4.28834 29.2251 6.40993 29.7741 8.8126 29.8946C11.2889 30.0351 18.7111 30.0351 21.1874 29.8946C23.5901 29.7808 25.7183 29.2318 27.4718 27.4713C29.2253 25.7174 29.7741 23.5886 29.8946 21.1854C30.0351 18.7086 30.0351 11.2914 29.8946 8.81457ZM26.6955 23.843C26.1735 25.1551 25.1629 26.1659 23.8444 26.6947C21.87 27.478 17.1852 27.2972 15.0033 27.2972C12.8215 27.2972 8.12995 27.4713 6.1623 26.6947C4.85053 26.1726 3.83993 25.1618 3.31121 23.843C2.52817 21.8682 2.70887 17.1823 2.70887 15C2.70887 12.8177 2.53486 8.12507 3.31121 6.15698C3.83324 4.84492 4.84384 3.8341 6.1623 3.30525C8.13664 2.52203 12.8215 2.70278 15.0033 2.70278C17.1852 2.70278 21.8767 2.52873 23.8444 3.30525C25.1562 3.8274 26.1668 4.83822 26.6955 6.15698C27.4785 8.13176 27.2978 12.8177 27.2978 15C27.2978 17.1823 27.4785 21.8749 26.6955 23.843Z" fill="black"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default FigmaHeader;
