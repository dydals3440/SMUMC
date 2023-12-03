import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../../constants/size';
import background from '../../../assets/img/coding.webp';

const Hero = styled.div`
  width: 100%;
  top: 0%;
  left: 0%;
  height: 670px;
  background-image: url(${background});
  background-size: cover; // 이미지 크기가 요소보다 클 때 비율 맞추기
  color: white;
`;

const Wrapper = styled.div`
  font-size: ${FONT_SIZE.SIX_XL};
  font-weight: ${FONT_WEIGHT.FONT_BLACK};
  position: absolute;
  top: 35%;
  left: 5%;
  z-index: 999;
  p {
    font-size: ${FONT_SIZE.BASE};
  }
`;
export { Hero, Wrapper };
