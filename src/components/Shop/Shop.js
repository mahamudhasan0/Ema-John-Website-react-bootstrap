import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import {
   addToDatabaseCart,
   getDatabaseCart,
} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
   const [cart, setCart] = useState([]);

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

   const handleAddToCart = (data) => {
      const sameProduct = cart.find((product) => product.key === data.key);
      let count = 1;
      let newCart;
      if (sameProduct) {
         count = sameProduct.quantity + 1;
         sameProduct.quantity = count;
         const others = cart.filter((product) => product.key !== data.key);
         newCart = [...others, sameProduct];
      } else {
         data.quantity = 1;
         newCart = [...cart, data];
      }

      setCart(newCart);
      addToDatabaseCart(data.key, count);
   };

   return (
      <Container>
         <Row>
            <Col md={8}>
               {fakeData.map((data) => (
                  <Product
                     data={data}
                     key={data.key}
                     showBtn={true}
                     handleAddToCart={handleAddToCart}
                  />
               ))}
            </Col>
            <Col md={4}>
               <Cart cart={cart}>
                  <Link to="/review">
                     <Button variant="warning">Review Place</Button>
                  </Link>
               </Cart>
            </Col>
         </Row>
      </Container>
   );
};

export default Shop;
