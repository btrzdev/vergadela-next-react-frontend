import { getStrapiMedia } from '@/utils/api-helpers'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type TeamSwiperProps = {
  items: any[]
}

const TeamSwiper: React.FC<TeamSwiperProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: items.length,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
  }

  return (
    <div className="h-[300px] w-full">
      <Slider {...settings}>
        {items?.length > 0 ? (
          items.map((item: any, index: number) => (
            <div
              className="group relative mr-[30px] flex h-[278px] w-1/4 overflow-hidden rounded-[12px]"
              key={index}
            >
              <div
                className="relative rounded-[12px] grayscale transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
                style={{
                  backgroundImage: `url(${getStrapiMedia(item?.picture?.data?.attributes?.url)})`,
                  height: '278px',
                  width: '308px',
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
                <h3 className="text-[28px] font-medium text-white">
                  {item?.name || 'Name'}
                </h3>
                <div className="flex items-center gap-[10px]">
                  <div className="h-[1px] w-[13px] bg-primary-yellow" />
                  <span className="text-[14px] font-medium capitalize text-primary-yellow">
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
