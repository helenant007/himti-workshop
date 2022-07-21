import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { cx } from 'emotion';

import tokopediaLogo from '../assets/toped-word.svg';
import diamond5 from '../assets/diamond-5.gif';
import star from '../assets/star.svg';
import { shopHeaderData } from '../../mockData';
import { styFlex, styContainerHeader, styHeading } from '../../styles';
import {
  styButtonGreen,
  styOnlineStatus,
  styButtonRadius,
  styMargin,
  styPadding,
  styAlignCenter,
} from './styles';

const { Search } = Input;

const {
  location, followers, isOnline, productRating,
} = shopHeaderData;

const Header = () => {
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLoadingFollow = () => {
    setLoadingFollow(true);
    setTimeout(() => setLoadingFollow(false), 3000);
  };

  const handleLoadingChat = () => {
    setLoadingChat(true);
    setTimeout(() => setLoadingChat(false), 3000);
  };

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
      <div className={cx(styFlex, styContainerHeader)} style={{ margin: 0, justifyContent: 'space-between' }}>
        <div>
          <img width="74px" src={tokopediaLogo} alt="Tokopedia Logo" />
        </div>
        <div className={styMargin('0 0 0 28px')}>
          <Search
            placeholder="Cari barang di sini"
            onSearch={() => {}}
            style={{
              width: 200,
            }}
          />
        </div>
        <div className={cx(styFlex, styMargin('0 0 0 20px'))}>
          Username: HIMTI Binus
        </div>
      </div>
      {exampleModal()}
    </>
  );
};

export default Header;
