import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

export function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaRegStarHalfStroke key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }
