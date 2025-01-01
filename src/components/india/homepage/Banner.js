'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Unique Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/90 via-primary/80 to-secondary/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange/20 via-transparent to-transparent"></div>

        {/* Unique Decorative Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        {/* Centered Content with Unique Style */}
        <div className="relative w-full text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center mx-auto max-w-4xl text-center">
              <div className="relative inline-block mb-6 md:mb-8">
                <span className="block text-sm md:text-base font-medium text-orange/90 mb-3">
                  Fast & Secure
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Apply for{' '}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-orange via-white to-orange bg-clip-text text-transparent">
                      Indian Visa
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange via-white to-orange opacity-50 blur-sm"></span>
                  </span>{' '}
                  Online
                </h1>
                {/* Unique Corner Elements */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange to-transparent"></div>
                  <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-orange to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-8 h-8 md:w-12 md:h-12">
                  <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-primary to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-full w-2 bg-gradient-to-t from-primary to-transparent"></div>
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 max-w-3xl">
                Start your journey to India with our efficient visa application
                platform. Quick processing, secure handling, and expert
                assistance at every step.
              </p>
            </div>
          </div>

          {/* Unique Animated Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute right-1/4 bottom-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Unique Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs md:text-sm lg:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 mr-2 md:mr-4 bg-gradient-to-r from-orange to-primary rounded-full"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-4 md:mx-8 text-orange">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 ml-2 md:ml-4 bg-gradient-to-r from-primary to-orange rounded-full"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
