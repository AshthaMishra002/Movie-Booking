import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';

const MovieCarousel = () => {
  const Movies: MovieCardType[] = [
    {
      title: "Inception",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg",
      _id: "1",
      rating: 8.5,
      type: "science fiction/action heist",
    },
    {
      title: "Before Sunrise",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/before-sunrise-et00045954-23-04-2021-11-42-20.jpg",
      _id: "2",
      rating: 8.1,
      type: "Romance",
    },
    {
      title: "The Conjuring",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-conjuring-et00014420-03-02-2021-11-38-48.jpg",
      _id: "3",
      rating: 8.3,
      type: "Horror",
    },
    {
      title: "Tamasha",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tamasha-et00025390-1676626485.jpg",
      _id: "4",
      rating: 7.4,
      type: "Romance/Drama",
    },
    {
      title: "Ajab Prem Ki Ghazab Kahani",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/ajab-prem-ki-ghazab-kahani-et00003583-23-01-2021-01-26-56.jpg",
      _id: "5",
      rating: 6.4,
      type: "Romance/Comedy",
    },
    {
      title: "Longlegs",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/longlegs-et00397621-1728025325.jpg",
      _id: "6",
      rating: 10,
      type: "Horror/Thriller",
    },
  ];

  return (
    <div className='sliderout'>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
