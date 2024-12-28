import React from 'react';
import PropTypes from 'prop-types';
import Card from './base/Card';
import Button from './base/Button';
import Rating from './base/Rating';
import { ShoppingCartIcon } from '../icons';
export function Product({
  name,
  id,
  description,
  price,
  image,
  rating,
  status = 'instock',
}) {
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      key={id}
      style={{ width: '100%' }}
    >
      <Card
        className="relative max-w-sm md:w-72"
        imgAlt={name}
        imgSrc={image}
        id={id}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <Rating rating={rating} total={5} />
        <div className="flex items-center justify-around">
          <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </div>
          <div className="inline text-sm font-medium  text-gray-500 dark:text-white">
            {status}
          </div>
        </div>
        <div className="flex items-center justify-around gap-x-4">
          <Button>Order Now</Button>
          <Button>
            <ShoppingCartIcon className="mr-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Product;

Product.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};
