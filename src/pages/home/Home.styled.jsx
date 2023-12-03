import styled from 'styled-components';
import backgroundHero from '../../assets/img/coding.webp';
import backgroundSecond from '../../assets/img/library.webp';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';
import { FONT } from '../../constants/font';

import theme from '../../theme';

const Container = styled.div`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  width: 100%;
  h1 {
    font-size: ${FONT_SIZE.SIX_XL};
    font-weight: ${FONT_WEIGHT.FONT_BLACK};
  }

  p {
    font-size: ${FONT_SIZE.XL};
  }
`;
const Hero = styled.div`
  width: 100%;
  top: 0%;
  left: 0%;
  height: 670px;
  background-image: url(${backgroundHero});
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

const introduceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 1190px;
  width: 100%;
  h1 {
    margin-top: 100px;
  }
`;

const secondBox = styled.div`
  background-image: url(${backgroundSecond});
  position: relative;
  height: 600px;
  padding: 240px 0px;
  margin-top: 200px;
  width: 100%;
  color: white;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const descriptionWrapper = styled.span`
  gap: 100px;

  ${theme.ALIGN.ROW_CENTER};
`;

const description = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  span {
    font-size: 6em;
  }
  h2 {
    font-size: ${FONT_SIZE.XL};
    font-weight: ${FONT_WEIGHT.BOLD};
  }

  p {
    font-size: ${FONT_SIZE.BASE};
    font-weight: ${FONT_WEIGHT.NORMAL};
  }
`;

export {
  Container,
  Hero,
  Wrapper,
  introduceBox,
  secondBox,
  description,
  descriptionWrapper
};
