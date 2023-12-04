import styled from 'styled-components';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  RESPONSIVE_SIZE
} from '../../../constants/size';
import background from '../../../assets/img/library.webp';
import theme from '../../../theme';

const EmojiBox = styled.div`
  background-image: url(${background});
  position: relative;
  height: 600px;
  padding: 240px 0px;
  margin-top: 200px;
  width: 100%;
  color: white;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const descriptionWrapper = styled.span`
  ${theme.ALIGN.ROW_CENTER};
  gap: 70px;
  @media (max-width: ${RESPONSIVE_SIZE.PC}) {
    padding: 10%;
    width: 100%;
  }
  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    ${theme.ALIGN.COLUMN_CENTER};
    gap: 10px;
  }
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
    font-size: ${FONT_SIZE.SM};
    font-weight: ${FONT_WEIGHT.NORMAL};
    margin: 0;
  }

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    span {
      font-size: 4em;
    }

    h2 {
      font-size: ${FONT_SIZE.LG};
      font-weight: ${FONT_WEIGHT.BOLD};
    }

    p {
      font-size: ${FONT_SIZE.SM};
      font-weight: ${FONT_WEIGHT.NORMAL};
    }
  }
`;
export { EmojiBox, descriptionWrapper, description };
