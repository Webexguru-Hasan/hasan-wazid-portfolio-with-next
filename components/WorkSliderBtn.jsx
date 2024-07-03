"use client";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
const WorkSliderBtn = ({containerStyles, BtnStyles, iconStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <button className={BtnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={BtnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
        </button>
    </div>
  )
}

export default WorkSliderBtn