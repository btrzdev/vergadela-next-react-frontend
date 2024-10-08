import { getStrapiMedia } from '@/utils/api-helpers'
import React from 'react'
import Slider from 'react-slick'

type TeamSwiperProps = {
  items: any[]
}

const TeamSwiper: React.FC<TeamSwiperProps> = ({ items }) => {
  const settings = {
    dots: true,
    dotsClass: 'button__bar_team',
    infinite: false,
    slidesToShow: Math.min(4, items.length),
    centerMode: false,
    variableWidth: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: Math.min(4, items.length),
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, items.length),
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, items.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, items.length),
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items?.length > 0 ? (
          items.map((item: any, index: number) => (
            <div
              className="group relative flex h-[278px] w-[220px] overflow-hidden rounded-[12px] pr-[30px] lg:max-w-[250px] lg:pr-[10px] xl:pr-0"
              key={index}
            >
              <div
                className="relative rounded-[12px] grayscale transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
                style={{
                  backgroundImage: `url(${getStrapiMedia(item?.picture?.data?.attributes?.url)})`,
                  height: '100%',
                  width: '100%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div
                className="absolute bottom-2 left-[-100%] flex flex-col transition-transform duration-500 ease-out group-hover:left-5"
                style={{ transition: 'left 0.5s ease-out' }}
              >
                <h3 className="text-[22px] font-medium text-white sm:text-[28px]">
                  {item?.name || 'Name'}
                </h3>
                <div className="flex items-center gap-[10px]">
                  <div className="h-[1px] w-[13px] bg-primary-yellow" />
                  <span className="text-[12px] font-medium capitalize text-primary-yellow sm:text-[14px]">
                    {item?.role || 'Role'}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            No items available
          </div>
        )}
      </Slider>
    </div>
  )
}

export default TeamSwiper
