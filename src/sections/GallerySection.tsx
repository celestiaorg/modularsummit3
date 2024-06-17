'use client'
import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { pageData } from '@/lib/data/home'

const GallerySection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 120,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1920, min: 961 },
      items: 2,
      partialVisibilityGutter: 80,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 960, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <section className={'w-full'}>
      <div className={'w-full pb-4 pt-4 lg:pt-20'}>
        <div className={'lg:pt-5'}>
          <div className={'mb-[30px] flex justify-center'}>
            <div className={'basis-auto text-center'}>
              <span className={'text-[18px] font-bold tracking-[-0.54px] text-black lg:text-[28px] lg:tracking-[-0.84px]'}>{pageData.GallerySection.subtitle}</span>
              <h2 className={'text-[32px] font-bold leading-none tracking-[-0.96px] text-black lg:text-[68px] lg:tracking-[-2.04px]'}>{pageData.GallerySection.title}</h2>
            </div>
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            centerMode={false}
            partialVisbile={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container h-[300px] md:h-[450px] xl:h-[600px] gap-10"
            removeArrowOnDeviceType={['mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="px-5 relative h-[600px] border-white border-r border-l-[8px] md:border-l-[20px] border-r-[8px] md:border-r-[20px]"
          >
            {pageData.GallerySection.images.map(function (image: any, key: number) {
              return <img key={key} src={image} alt={'gallery image'} className={'absolute left-0 top-0 h-full w-full object-cover'} />
            })}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
