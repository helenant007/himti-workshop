import React from 'react';
import star from '../assets/star.svg';

const ProductCard = ({ data }) => {
  const {
    img, title, price, rating, reviews,
  } = data;

  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <div>
          <div>
            {Array.from(rating).map(() => <img src={star} />)}
          </div>
          <div>
            (
            {reviews}
            )
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
