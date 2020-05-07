import React, { FC, useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';

interface ISliderProps {}

const Slider: FC<ISliderProps> = (): JSX.Element => {
  
  const wrapper = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<Swiper>(null);

  useEffect(() => {
    const newSwiper = new Swiper(wrapper.current, {
      loop: true,
      speed: 400,
      autoHeight: true,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    setSwiper(newSwiper);
  }, []);

  return (
    <>
      <div ref={wrapper} className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ height: 400 }}>
            <img style={{ width: '100%', height: '100%' }} src="https://content.foodspring.co.kr/admin/images/97_035046804997_0350468049.png" alt=""/>
          </div>
          <div className="swiper-slide" style={{ height: 400 }}>
            <img style={{ width: '100%', height: '100%' }} src="https://content.foodspring.co.kr/admin/images/101_5623276075101_5623276075.png" alt=""/>
          </div>
          <div className="swiper-slide" style={{ height: 400 }}>
            <img style={{ width: '100%', height: '100%' }} src="https://content.foodspring.co.kr/admin/images/36_575818917536_5758189175.png" alt=""/>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}></div>
        <div className="swiper-button-next" onClick={() => swiper.slideNext()}></div>
      </div>
    </>
  );

};

export default Slider;
