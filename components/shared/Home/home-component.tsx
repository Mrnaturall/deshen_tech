  "use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HomeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff0505] from-[0%] via-[#e02d2d] via-[80%] to-[#E87131] to-[100%] px-4 sm:px-6 lg:px-8">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Hello, I am{" "}
              <span className=" text-white  block sm:inline">
                Ngozi Favour Nwachukwu
              </span>
            </h1>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#fffff] to-[#f84e50] flex items-center justify-center ">
              {!imageError ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Ngozi Favour Nwachukwu"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 400px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  NF
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
