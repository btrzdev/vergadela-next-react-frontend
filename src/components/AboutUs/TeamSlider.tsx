import { getStrapiMedia } from '@/utils/api-helpers'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

type TeamSwiperProps = {
  items: any[]
}
import { Pagination } from 'swiper/modules'

const TeamSlider: React.FC<TeamSwiperProps> = ({ items }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {items?.length > 0 ? (
        items.map((item: any, index: number) => (
          <SwiperSlide>
            {' '}
            <div
              className="xl:[308px] group relative flex h-[278px] w-[250px] overflow-hidden rounded-[12px] pr-0"
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
          </SwiperSlide>
        ))
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          No items available
        </div>
      )}
    </Swiper>
  )
}

export default TeamSlider
