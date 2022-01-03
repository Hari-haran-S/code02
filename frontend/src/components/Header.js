/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Carousel from './Hero';

const Header = () => {
  return (
    <header className='bg-white dark:bg-gray-800'>
      <nav className='border-b dark:border-gray-700'>
        <div className='container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center'>
          <div className='flex items-center justify-between'>
            <div>
              <a
                className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
                href='#'
              >
                1 Crore
              </a>
            </div>
            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='Toggle menu'
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className='items-center lg:flex'>
            <div className='flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:-px-8'>
              <a
                className='block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline'
                href='#'
              >
                Search
              </a>

              <a
                className='block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline'
                href='#'
              >
                Why us?
              </a>
              <a
                className='block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline'
                href='#'
              >
                Contact
              </a>
              <button className='flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl'>
              Find your premium new glasses exported from US
            </h1>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>
              We work with the best remunated glasses dealers in US to find your
              new glasses.
            </p>
            <div className='grid gap-6 mt-8 sm:grid-cols-2'>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>Premium selection</span>
              </div>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>Insurance</span>
              </div>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>All legal documents</span>
              </div>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>From US glasses dealers</span>
              </div>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>Payment Security</span>
              </div>
              <div className='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  className='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='mx-3'>Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full h-96 lg:w-1/2'>
          <img
            className='object-cover w-full h-full max-w-2xl rounded-md'
            src='/images/real-estate.jpg'
            alt='glasses photo'
          />
        </div>
      </div> */}
    </header>
  );
};

export default Header;
