import React from 'react';
import { MovieCardType } from '@/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';
import './MovieCard.css';

const MovieCard = (data: MovieCardType) => {
  const router = useRouter();
  const city = "mumbai"; // You can also consider making this dynamic if needed
  const { title, imageUrl, _id, rating, type } = data; // Ensure 'title' is destructured correctly

  return (
    <div
      className="moviecard"
      onClick={() => {
        router.push(`/${city}/movies/${title}`); // Use 'title' instead of 'moviename'
      }}
    >
      <div
        className="movieimg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p className="rating">
          <BsFillStarFill className="star" />
          &nbsp;&nbsp;
          {rating}/10
        </p>
      </div>
      <div className='details'>
        <p className='title'>
          {title} {/* Make sure 'title' is being accessed here */}
        </p>
        <p className='type'>
          {type}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
