import React from 'react';
import HeaderShop from './components/Header';
import ProductList from './components/ProductList';
import Showcase from './components/Showcase';

// npm install
// npm start / yarn start

import 'antd/dist/antd.css';
import { styFlex } from './styles';

const View = () => (
  <div>
    <div>
      Header Tokopedia
    </div>
    <div>
      <HeaderShop />
    </div>
    <div className={styFlex}>
      <div>
        <Showcase />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  </div>
);
export default View;
