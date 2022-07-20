import React from 'react';
import ProductCard from '../ProductCard';

import { shopProductData } from '../../mockData';
import { styPadding } from '../../styles';
import { styContainerGrid } from './styles';

const ProductList = () => (
  <div className={styPadding('20px')}>
    <div className={styContainerGrid}>
      {shopProductData.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
