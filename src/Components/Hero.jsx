import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 lg:mb-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to <span className=' bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>TechBlog</span></h1>
            <p className="py-6">
              TechBlog is the bridge between the complex world of technology and the curious minds eager to understand it
            </p>
            <div className='flex gap-2 justify-center'>

              <Link to={"/blogs"} className="relative inline-block px-6 py-3 font-semibold group transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-orange-600 to-blue-600 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-800 group-hover:bg-transparent rounded-lg transition-all duration-300"></span>
                <span className="relative text-gray-800 group-hover:text-white z-10 flex items-center gap-2">
                  Read Blogs
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link to={"/bookMark"} className="relative inline-block px-6 py-3 font-semibold group transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-green-600 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-800 group-hover:bg-transparent rounded-lg transition-all duration-300"></span>
                <span className="relative text-gray-800 group-hover:text-white z-10 flex items-center gap-2">
                  Bookmarks
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;