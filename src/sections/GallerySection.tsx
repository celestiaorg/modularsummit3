'use client'
import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { pageData } from '@/lib/home'

const GallerySection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <section className={'w-full'}>
      <div className={'w-full py-4'}>
        <div className={'pt-5 pb-16'}>
          <div className={'flex justify-center mb-[30px]'}>
            <div className={'basis-auto text-center'}>
              <span className={'text-black font-bold lg:tracking-[-0.84px] lg:text-[28px]'}>
                {pageData.GallerySection.subtitle}
              </span>
              <h2
                className={'text-black font-bold lg:tracking-[-2.04px] lg:text-[68px] leading-none'}
              >
                {pageData.GallerySection.title}
              </h2>
            </div>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            centerMode={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container h-[600px] gap-10"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="px-5 relative h-[600px] border-white border-r border-l-[20px] border-r-[20px]"
          >
            {pageData.GallerySection.images.map(function (image: any, key: number) {
              return (
                <img
                  key={key}
                  src={image}
                  className={'h-full object-cover absolute left-0 top-0 w-full'}
                />
              )
            })}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
