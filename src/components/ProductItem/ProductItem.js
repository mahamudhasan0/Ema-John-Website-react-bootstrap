import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductItem = () => {
   const { key } = useParams();
   const items = fakeData.find((data) => data.key === key);

   return (
      <Container>
         <Product data={items} showBtn={false} />
      </Container>
   );
};

export default ProductItem;
