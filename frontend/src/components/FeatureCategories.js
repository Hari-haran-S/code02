/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const FeatureCategories = () => {
  return (
    <>
      <section className='py-6 sm:py-12 dark:bg-coolGray-800 dark:text-coolGray-100'>
        <div className='container p-6 mx-auto space-y-8'>
          <div className='space-y-2 text-center'>
            <h2 className='text-3xl font-bold'>Featured Categories</h2>
            {/* <p className='font-serif text-sm dark:text-coolGray-400'>
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p> */}
          </div>
          <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
            <article className='flex flex-col dark:bg-coolGray-900'>
              <a href='#' aria-label='Te nulla oportere reprimique his dolorum'>
                <img
                  alt=''
                  className='object-cover w-full h-52 dark:bg-coolGray-500'
                  src='https://source.unsplash.com/201x201/?fashion'
                />
              </a>
              <div className='flex flex-col flex-1 p-6'>
                <a
                  href='#'
                  aria-label='Te nulla oportere reprimique his dolorum'
                ></a>
                <a
                  href='#'
                  className='text-xs tracking-wider uppercase hover:underline dark:text-blue-400'
                >
                  Cars
                </a>
                {/* <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400'>
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div> */}
              </div>
            </article>
            <article className='flex flex-col dark:bg-coolGray-900'>
              <a href='#' aria-label='Te nulla oportere reprimique his dolorum'>
                <img
                  alt=''
                  className='object-cover w-full h-52 dark:bg-coolGray-500'
                  src='https://source.unsplash.com/202x202/?fashion'
                />
              </a>
              <div className='flex flex-col flex-1 p-6'>
                <a
                  href='#'
                  aria-label='Te nulla oportere reprimique his dolorum'
                ></a>
                <a
                  href='#'
                  className='text-xs tracking-wider uppercase hover:underline dark:text-blue-400'
                >
                  Convenire
                </a>
                <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400'>
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className='flex flex-col dark:bg-coolGray-900'>
              <a href='#' aria-label='Te nulla oportere reprimique his dolorum'>
                <img
                  alt=''
                  className='object-cover w-full h-52 dark:bg-coolGray-500'
                  src='https://source.unsplash.com/203x203/?fashion'
                />
              </a>
              <div className='flex flex-col flex-1 p-6'>
                <a
                  href='#'
                  aria-label='Te nulla oportere reprimique his dolorum'
                ></a>
                <a
                  href='#'
                  className='text-xs tracking-wider uppercase hover:underline dark:text-blue-400'
                >
                  Convenire
                </a>
                <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400'>
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className='flex flex-col dark:bg-coolGray-900'>
              <a href='#' aria-label='Te nulla oportere reprimique his dolorum'>
                <img
                  alt=''
                  className='object-cover w-full h-52 dark:bg-coolGray-500'
                  src='https://source.unsplash.com/204x204/?fashion'
                />
              </a>
              <div className='flex flex-col flex-1 p-6'>
                <a
                  href='#'
                  aria-label='Te nulla oportere reprimique his dolorum'
                ></a>
                <a
                  href='#'
                  className='text-xs tracking-wider uppercase hover:underline dark:text-blue-400'
                >
                  Convenire
                </a>
                <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400'>
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCategories;
