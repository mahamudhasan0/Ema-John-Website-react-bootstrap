import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import {
   getDatabaseCart,
   processOrder,
   removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import orderImg from '../../images/giphy.gif';

const Review = () => {
   const [cart, setCart] = useState([]);
   const [orderProcess, setOrderProcess] = useState(false);

   useEffect(() => {
      const addedData = getDatabaseCart();
      const dataKey = Object.keys(addedData);
      const productData = dataKey.map((key) => {
         const product = fakeData.find((data) => data.key === key);
         product.quantity = addedData[key];
         return product;
      });
      setCart(productData);
   }, []);

   const handleRemoveItem = (productKey) => {
      const removeKey = cart.filter((data) => data.key !== productKey);
      setCart(removeKey);
      removeFromDatabaseCart(productKey);
   };

   const handleOrderPlace = () => {
      setCart([]);
      setOrderProcess(true);
      processOrder();
   };

   return (
      <Container>
         <Row>
            <Col md={8}>
               {cart.map((data) => (
                  <ReviewItem
                     data={data}
                     key={data.key}
                     handleRemoveItem={handleRemoveItem}
                  />
               ))}
               {orderProcess && <Image src={orderImg} fluid />}
            </Col>
            <Col md={4}>
               <Cart cart={cart}>
                  <Button variant="warning" onClick={handleOrderPlace}>
                     Place Order
                  </Button>
               </Cart>
            </Col>
         </Row>
      </Container>
   );
};

export default Review;
