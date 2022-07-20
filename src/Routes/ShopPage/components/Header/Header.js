import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { cx } from 'emotion';

import topedLogo from '../assets/toped-logo.jpeg';
import diamond5 from '../assets/diamond-5.gif';
import star from '../assets/star.svg';
import { shopHeaderData } from '../../mockData';
import { styFlex, styContainerHeader, styHeading } from '../../styles';
import { styMargin } from './styles';

const {
  location, followers, isOnline, productRating,
} = shopHeaderData;

const Header = () => {
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLoadingFollow = () => {};

  const handleLoadingChat = () => {};

  const exampleModal = () => (
    <Modal
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
    >
      Hello World
    </Modal>
  );

  return (
    <>
      <div className={cx(styFlex, styContainerHeader)}>
        <div>
          <div>
            <img width="74px" src={topedLogo} alt="Shop Pic" />
          </div>
          <div className={cx(styFlex, styMargin('0 0 0 10px'), styHeading(20))}>
            Tokopedia Merchandise
          </div>
          <div>
            <img
              style={{ paddingLeft: '10px' }}
              src={diamond5}
              alt="Shop Reputation"
            />
          </div>
          {isOnline && <div>Online</div>}
          <div className={styMargin('10px')}>{location}</div>
          <div className={styMargin('10px')}>
            {followers}
            Followers
          </div>
          <Button
            className={styMargin('10px')}
            type="primary"
            loading={loadingFollow}
            onClick={handleLoadingFollow}
          >
            Follow
          </Button>
          <Button
            className={styMargin('10px')}
            type="primary"
            loading={loadingChat}
            onClick={handleLoadingChat}
          >
            {' '}
            Chat Penjual
          </Button>
          <Button className={styMargin('10px')}>Info Toko</Button>
        </div>
        <div>
          <div>Nilai Kualitas Produk</div>
          <div>{productRating}</div>
          <div>
            {Array.from(Array(Math.ceil(productRating))).map(() => (
              <img width="20px" src={star} alt="Star" />
            ))}
          </div>
        </div>
      </div>
      {exampleModal()}
    </>
  );
};

export default Header;
