import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = ({ data, showBtn, handleAddToCart }) => {
   const { img, name, seller, price, stock, key } = data;

   return (
      <Row className="py-3 border-bottom border-right">
         <Col md={5}>
            <Image src={img} fluid />
         </Col>
         <Col md={7}>
            <h6>
               <Link to={`/product/${key}`}>{name}</Link>
            </h6>
            <p>
               <small>by: {seller}</small>
            </p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            {showBtn && (
               <Button variant="warning" onClick={() => handleAddToCart(data)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
               </Button>
            )}
         </Col>
      </Row>
   );
};

export default Product;
