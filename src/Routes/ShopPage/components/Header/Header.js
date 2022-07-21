import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { cx } from 'emotion';

import topedLogo from '../assets/toped-logo.jpeg';
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
      <div className={cx(styFlex, styContainerHeader)}>
        <div className={styFlex}>
          <div>
            <img width="74px" src={topedLogo} alt="Shop Pic" />
          </div>
          <div className={styMargin('0 0 0 28px')}>
            <div
              className={cx(styFlex, styMargin('0 0 0 10px'), styHeading(20))}
            >
              Tokopedia Merchandise
              <div>
                <img
                  style={{ paddingLeft: '10px' }}
                  src={diamond5}
                  alt="Shop Reputation"
                />
              </div>
            </div>
            <div className={styFlex}>
              {isOnline && (
                <div
                  className={cx(styOnlineStatus, styMargin('5px 5px 5px 10px'))}
                >
                  Online
                </div>
              )}
              <div className={styMargin('10px')}>{location}</div>
              <div className={styMargin('10px')}>
                {followers}
                Followers
              </div>
            </div>
            <div className={styFlex}>
              <Button
                className={cx(
                  styButtonGreen,
                  styMargin('10px'),
                  styButtonRadius,
                )}
                type="primary"
                loading={loadingFollow}
                onClick={handleLoadingFollow}
              >
                Follow
              </Button>
              <Button
                className={cx(
                  styButtonGreen,
                  styMargin('10px'),
                  styButtonRadius,
                )}
                type="primary"
                loading={loadingChat}
                onClick={handleLoadingChat}
              >
                Chat Penjual
              </Button>
              <Button
                className={cx(styMargin('10px'), styButtonRadius)}
                onClick={() => setIsModalVisible(true)}
              >
                Info Toko
              </Button>
            </div>
          </div>
        </div>
        <div className={cx(styFlex, styMargin('0 0 0 20px'))}>
          <div className={styMargin('0 0 0 20px')}>
            <div>Nilai Kualitas Produk</div>
            <div className={cx(styFlex, styAlignCenter)}>
              <div className={styHeading(20)}>{productRating}</div>
              <div className={styPadding('0 0 3px 10px')}>
                {Array.from(Array(5)).map(() => (
                  <img width="20px" src={star} alt="Star" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {exampleModal()}
    </>
  );
};

export default Header;
