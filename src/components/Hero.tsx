import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empower. Inspire.</span>
                <span className="block text-[#F4B223]">Achieve Excellence.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We believe every child deserves an education that allows them to reach their maximum potential. At Victory AI, our mission is to empower every student to achieve excellence in everything they pursue.
              </p>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900">Excellence in Every Domain</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-[#F4B223]" />
                    <span className="ml-2 text-gray-700">Academic Excellence through innovative IB education</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-[#F4B223]" />
                    <span className="ml-2 text-gray-700">Artistic Development with world-class facilities</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-[#F4B223]" />
                    <span className="ml-2 text-gray-700">Sports Achievement with professional coaching</span>
                  </div>
                </div>
                
                <p className="mt-4 text-lg text-gray-500">
                  We combine IB education methods with cutting-edge AI technology to create an engaging, interactive, and collaborative learning environment where excellence becomes a habit.
                </p>
              </div>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F4B223] hover:bg-[#E5A420] md:py-4 md:text-lg md:px-10">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#F4B223] bg-[#FDF6E3] hover:bg-[#FCF0D6] md:py-4 md:text-lg md:px-10">
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/classroom-image.jpg"
          alt="Modern classroom with students using technology"
        />
      </div>
    </div>
  );
};