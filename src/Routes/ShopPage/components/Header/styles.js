import { css } from 'emotion';

// const Green = '#03AC0E';
// const LightGreen = 'rgb(214, 255, 222)';

export const styMargin = (marginData = '0') => css`
    margin: ${marginData};
`;

export const styOnlineStatus = css`
    background-color: rgb(214, 255, 222);
    color: #03AC0E;
    border-radius: 5px;
    padding: 3px 5px;
    font-weight: 600;
`;
