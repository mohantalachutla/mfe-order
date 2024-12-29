import React from 'react';
import PropTypes from 'prop-types';
import Card from './base/Card';
import Button from './base/Button';
import { cancelOrderAction } from '../actions';
export function Order({
  name: orderName,
  _id,
  items,
  status = 'instock',
  dispatch,
}) {
  const { name: productName, image, description, price } = items[0];
  const name = orderName || productName;
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      key={_id}
      style={{ width: '100%' }}
    >
      <Card className="relative w-full" imgAlt={name} imgSrc={image}>
        <div className="w-full flex flex-col justify-between gap-4">
          <h5 className="text-xl text-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="text-base font-mono tracking-tight text-gray-900 dark:text-white">
            {description}
          </p>
          <div className="w-full flex items-center justify-around gap-x-4">
            <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </div>
            <div className="inline text-sm font-medium  text-gray-500 dark:text-white">
              {status}
            </div>
          </div>
          <div className="w-full flex items-center justify-around gap-x-4">
            <Button
              onClick={() => {
                dispatch(
                  cancelOrderAction({
                    _id,
                  })
                );
              }}
            >
              Cancel Order
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Order;

Order.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};
