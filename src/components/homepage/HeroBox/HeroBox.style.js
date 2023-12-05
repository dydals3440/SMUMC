import styled from 'styled-components';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  RESPONSIVE_SIZE
} from '../../../constants/size';
import theme from '../../../theme';
import background from '../../../assets/img/coding.webp';

const Hero = styled.div`
  width: 100%;
  top: 0%;
  left: 0%;
  height: 670px;
  background-image: url(${background});
  background-size: cover; // 이미지 크기가 요소보다 클 때 비율 맞추기
  color: white;

  gap: 30px;

  //button
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 70px;
`;

const Wrapper = styled.div`
  font-size: ${FONT_SIZE.SIX_XL};
  font-weight: ${FONT_WEIGHT.FONT_BLACK};
  position: absolute;
  top: 15%;
  left: 5%;
  z-index: 999;
  p {
    font-size: ${FONT_SIZE.BASE};
  }
  @media (max-width: ${RESPONSIVE_SIZE.PC}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER}
    font-size: ${FONT_SIZE.FIVE_XL};
  }
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 20px;
  font-size: ${FONT_SIZE.LG};
  background-color: ${theme.COLOR.DARK.BLACK};
  font-weight: ${FONT_WEIGHT.FONT_BLACK};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${theme.COLOR.PRIMARY.BLUE};
  }
`;

export { Hero, Wrapper, Button };
