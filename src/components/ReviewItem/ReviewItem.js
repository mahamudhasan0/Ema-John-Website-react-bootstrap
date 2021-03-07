import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewItem = ({ data, handleRemoveItem }) => {
   const { name, price, quantity, key } = data;

   return (
      <div className="py-3 border-bottom border-right">
         <h6>{name}</h6>
         <p>Price: ${price}</p>
         <p>Quantity: {quantity}</p>
         <Button variant="warning" onClick={() => handleRemoveItem(key)}>
            Remove Item
         </Button>
      </div>
   );
};

export default ReviewItem;
