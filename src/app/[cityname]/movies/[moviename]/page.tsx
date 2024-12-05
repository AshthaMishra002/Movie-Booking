"use client"
import React from 'react';
import { BsShare, BsFillStarFill } from "react-icons/bs";
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Moviepage = () => {

    const pathname = usePathname()

    const movie = {
        wideposter: "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg",
        portraitposter: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg",
        title: "Inception",
        rating: 8.5,
        halls: ["2D", "3D"],
        languages: ["English"],
        duration: "2h 28m",
        type: "Action, Adventure, Sci-Fi",
        releasedate: "16 Jul, 2010",
        cast: [
            {
                _id: "1",
                name: "Leonardo DiCaprio",
                role: "as Cobb",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/leonardo-dicaprio-1273-06-05-2020-06-55-21.jpg"
            },
            {
                _id: "2",
                name: "Joseph Gordon-Levitt",
                role: "as Arthur",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/joseph-gordon-levitt-13608-24-03-2017-12-42-16.jpg"
            },
            {
                _id: "3",
                name: "Elliot Page",
                role: "as Ariadne",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/elliot-page-5394-1658904558.jpg"
            },
            {
                _id: "4",
                name: "Tom Berenger",
                role: "as Browning",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-berenger-19904-08-07-2020-03-28-41.jpg"
            },
            {
                _id: "5",
                name: "Ken Watanabe ",
                role: "as Saito",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ken-watanabe-1191-24-03-2017-17-31-57.jpg"
            },
            {
                _id: "6",
                name: "Marion Cotillard",
                role: "as Mal",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/marion-cotillard-16676-24-03-2017-17-32-30.jpg"
            },
            {
                _id: "7",
                name: "Tom Hardy",
                role: "as Eames",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg"
            },
            {
                _id: "8",
                name: "Cillian Murphy",
                role: "as Robert Fischer",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/cillian-murphy-455-24-03-2017-12-58-10.jpg"
            },
            {
                _id: "9",
                name: "Dileep Rao",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dileep-rao-15015-20-11-2019-03-36-34.jpg"
            },
        
        ],
        crew: [
            {
                _id: "1",
                name: "Christopher Nolan",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/christopher-nolan-448-12-09-2017-06-17-25.jpg"
            },
            {
                _id: "2",
                name: "Hans Zimmer",
                role: "Composer",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hans-zimmer-786-24-03-2017-12-32-04.jpg"
            }
        ],
        about:"Dom is skilled at stealing secrets from dreams, but it cost him everything. Now, he is offered his life back if he can pull off the reverse and plant an idea in a C.E.O`s mind."

    };

    return (
        <div className='moviepage'>
            <div className='c1' style={{
                backgroundImage: `url(${movie.wideposter})`
            }}>
                <div className='c11'>
                    <div className='left'>
              
                        <div className='movie_poster'>
                            <img src={movie.portraitposter} alt={movie.title} />
                            <p>In cinemas</p>
                        </div>
                        
                        <div className='movie_details'>
                            <p className='title'>{movie.title}</p>
                            <p className='rating'>
                                <BsFillStarFill className='star' />&nbsp;&nbsp;
                                {movie.rating}/10
                            </p>
                            <div className='halls_language'>
                                <p className='halls'>
                                    {movie.halls.map((hall, index) => (
                                        <span key={index}>{hall}</span>
                                    ))}
                                </p>
                                <p className='languages'>
                                    {movie.languages.join(', ')}
                                </p>
                            </div>
                            <p className='duration_type_releasedate'>
                                <span className='duration'>{movie.duration}</span>
                                <span>•</span>
                                <span className='type'>{movie.type}</span>
                                <span>•</span>
                                <span className='releasedate'>{movie.releasedate}</span>
                            </p>
                            <Link href= {`${pathname}/buytickets`}
                            className='linkstylenone'>
                            <button className='bookbtn'>Book Tickets</button>
                            </Link>
                        </div>
                    </div>
                    <div className='right'>
                        <button className='sharebtn'><BsShare className='shareicon' /> Share</button>
                       
                    </div>
                </div>
            </div>
            <div className='c2'>
                <h1>About the Movie</h1>
                <p>{movie.about}</p>
                <div className='line'></div>
                <h1>Cast</h1>
                <div className='circlecardsslider'>

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
        {
            movie.cast.map((cast, index) => {
                return(
                    <SwiperSlide key={index} >
                        <CelebCard {...cast} />
                    </SwiperSlide> 
                )
            })
        }
        </Swiper>

                </div>
                <div className='line'></div>
                <h1>crew</h1>
                <div className='circlecardsslider'>
                    
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
        {
            movie.crew.map((crew, index) => {
                return(
                    <SwiperSlide key={index} >
                        <CelebCard {...crew} />
                    </SwiperSlide> 
                )
            })
        }
        </Swiper>
                </div>
                <div className='line'></div>
                <h1>You might also like</h1>
                <MovieCarousel />

            </div>
        </div>
    );
}

export default Moviepage;
