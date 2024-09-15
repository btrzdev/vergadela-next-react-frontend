declare module 'nuka-carousel' {
  import React from 'react'

  interface CarouselProps {
    autoplay?: boolean
    wrapAround?: boolean
    slidesToShow?: number
    speed?: number
    pauseOnHover?: boolean
    renderCenterLeftControls?: () => React.ReactNode
    renderCenterRightControls?: () => React.ReactNode
    renderBottomCenterControls?: () => React.ReactNode
    cellAlign?: 'left' | 'center' | 'right'
    dragging?: boolean
    slideIndex?: number
    withoutControls?: boolean
    autoplayInterval?: number
    swiping?: boolean
    dragThreshold?: number
    children?: React.ReactNode
    className: string
  }

  const Carousel: React.FC<CarouselProps>
  export default Carousel
}
