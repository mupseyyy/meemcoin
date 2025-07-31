import React from "react";

const Contract = () => {
  return (
    <section className="flex w-full px-6 md:px-24 py-24 flex-col items-start bg-gray-200">
      <div className="flex max-w-6xl px-6 md:px-12 pb-16 flex-col items-center gap-10 self-stretch relative mx-auto">
        {/* CONTRACT Heading */}
        <div className="flex flex-col items-start relative">
          <div className="text-white font-['Luckiest_Guy'] text-4xl md:text-6xl font-normal leading-tight relative"
               style={{
                 textShadow: "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
                 WebkitTextStroke: "4px #000"
               }}>
            <span>CONTRACT</span>
          </div>
        </div>
        
        {/* Contract Address Container */}
        <div className="w-full max-w-5xl h-16 md:h-20 relative">
          {/* Background + Border (red dashed) */}
          <div className="w-full h-16 md:h-20 flex-shrink-0 rounded-xl border-2 border-dashed border-black bg-red-600 absolute left-0 top-0"></div>
          
          {/* Background + Border (white solid) */}
          <div className="flex w-full h-16 md:h-20 p-0.5 justify-center items-center flex-shrink-0 rounded-xl border-2 border-solid border-black bg-white absolute -left-2 -top-2">
            <div className="w-full h-14 md:h-16 flex-shrink-0 rounded-xl bg-transparent shadow-[0_10px_15px_-3px_#374151,0_4px_6px_-4px_#374151] absolute left-0.5 top-0.5">
              
              {/* Input */}
              <div className="inline-flex h-14 md:h-16 px-4 py-4 items-center flex-shrink-0 rounded-xl bg-gray-100 absolute left-0 top-0 w-full">
                <div className="w-full h-6 md:h-8 absolute left-4 top-3 md:top-4">
                  <div className="text-black font-['Stopbuck'] text-sm md:text-xl font-medium leading-6 md:leading-8 px-2 md:px-4 truncate">
                    8j5r6KTeeT9cm6WAmQ2MWB2SNeu97Cz1JTkSDG76moon
                  </div>
                </div>
              </div>
              
              {/* Copy Button */}
              <button className="flex w-10 md:w-12 h-8 md:h-10 px-2 py-2 justify-center items-center flex-shrink-0 rounded-xl border-2 border-solid border-red-600 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] absolute right-1 top-3 md:top-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.841 3.57096L19.409 1.139C18.9871 0.717039 18.4148 0.479984 17.818 0.47998L9.75 0.47998C8.50734 0.47998 7.5 1.48732 7.5 2.72998V4.97998H3.75C2.50734 4.97998 1.5 5.98732 1.5 7.22998V22.23C1.5 23.4726 2.50734 24.48 3.75 24.48H14.25C15.4927 24.48 16.5 23.4726 16.5 22.23V19.98H20.25C21.4927 19.98 22.5 18.9726 22.5 17.73V5.16195C22.5 4.56521 22.2629 3.99292 21.841 3.57096ZM13.9688 22.23H4.03125C3.95666 22.23 3.88512 22.2003 3.83238 22.1476C3.77963 22.0949 3.75 22.0233 3.75 21.9487V7.51123C3.75 7.43664 3.77963 7.3651 3.83238 7.31236C3.88512 7.25961 3.95666 7.22998 4.03125 7.22998H7.5V17.73C7.5 18.9726 8.50734 19.98 9.75 19.98H14.25V21.9487C14.25 22.0233 14.2204 22.0949 14.1676 22.1476C14.1149 22.2003 14.0433 22.23 13.9688 22.23ZM19.9688 17.73H10.0312C9.95666 17.73 9.88512 17.7003 9.83238 17.6476C9.77963 17.5949 9.75 17.5233 9.75 17.4487V3.01123C9.75 2.93664 9.77963 2.8651 9.83238 2.81236C9.88512 2.75961 9.95666 2.72998 10.0312 2.72998H15V6.85498C15 7.47631 15.5037 7.97998 16.125 7.97998H20.25V17.4487C20.25 17.5233 20.2204 17.5949 20.1676 17.6476C20.1149 17.7003 20.0433 17.73 19.9688 17.73ZM20.25 5.72998H17.25V2.72998H17.7015C17.7761 2.72998 17.8476 2.75961 17.9004 2.81234L20.1676 5.07959C20.1938 5.10571 20.2145 5.13672 20.2286 5.17084C20.2427 5.20497 20.25 5.24154 20.25 5.27848V5.72998Z" fill="#E43048"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
