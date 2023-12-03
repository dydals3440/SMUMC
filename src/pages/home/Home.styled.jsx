import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';
import { FONT } from '../../constants/font';

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

export { Container };
