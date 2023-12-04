import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, RESPONSIVE_SIZE } from '../../constants/size';
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
  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h1 {
      font-size: ${FONT_SIZE.FOUR_XL};
      font-weight: ${FONT_WEIGHT.FONT_BLACK};
    }
    p {
      font-size: ${FONT_SIZE.BASE};
    }
  }
`;
const Wrapper = styled.div`
  gap: 40px;
  ${theme.ALIGN.ROW_CENTER}
`;
export { Container, Wrapper };
