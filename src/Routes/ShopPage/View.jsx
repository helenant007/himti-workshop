import React from 'react';
import HeaderShop from './components/Header';
import ProductList from './components/ProductList';
import Showcase from './components/Showcase';

import 'antd/dist/antd.css';
import { styFlex } from './styles';
import HeaderTokopedia from './components/HeaderTokopedia';

const View = () => (
  <div>
    <div>
      <HeaderTokopedia />
    </div>
    <div>
      <HeaderShop />
    </div>
    <div className={styFlex}>
      <Showcase />
      <ProductList />
    </div>
  </div>
);
export default View;
