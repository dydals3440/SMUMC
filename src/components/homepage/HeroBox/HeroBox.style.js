import styled, { keyframes } from 'styled-components';

import {
  FONT_SIZE,
  FONT_WEIGHT,
  RESPONSIVE_SIZE
} from '../../../constants/size';
import theme from '../../../theme';
import background from '../../../assets/img/coding.webp';

const Hero = styled.div`
  width: 100vw;
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  height: 670px;
  background-image: url(${background});
  background-size: cover; // 이미지 크기가 요소보다 클 때 비율 맞추기
  color: white;

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER}
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 5%;
  justify-content: flex-start;
  z-index: 999;

  h1 {
    font-size: ${FONT_SIZE.SIX_XL};
    font-weight: ${FONT_WEIGHT.FONT_BLACK};
  }

  p {
    font-size: ${FONT_SIZE.BASE};
  }
`;

const ApplyWrapper = styled.div`
  position: relative;
  top: 100px;
`;

const shakeAnimation = keyframes`
0% { transform: translate(-5px, 0) rotate(-5deg); }
25% { transform: translate(5px, 0) rotate(5deg); }
50% { transform: translate(-5px, 0) rotate(-5deg); }
75% { transform: translate(5px, 0) rotate(5deg); }
100% { transform: translate(-5px, 0) rotate(-5deg); }
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: ${FONT_SIZE.LG};
  /* background-color: ${theme.COLOR.DARK.BEIGE_BROWN}; */
  background: #34a65f;
  font-weight: ${FONT_WEIGHT.FONT_BLACK};

  color: white;
  border: none;
  cursor: pointer;
  /* before: ease */
  animation: ${shakeAnimation} 2s infinite;

  &:active {
    animation: ${shakeAnimation} 4s ease infinite;
  }

  &:hover {
    /* background-color: ${theme.COLOR.PRIMARY.BLUE}; */
    background-color: #f5624d;
  }
`;

export { Hero, Wrapper, ApplyWrapper, Button };
