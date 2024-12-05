import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const Homeslider = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update dimensions on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const banners = [
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1730300863009_peppapdweb.jpg',
    },
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg',
    },
  ];

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt={`Banner ${index + 1}`}
              width={dimensions.width}
              height={dimensions.height / 2}
              style={{
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Homeslider;
