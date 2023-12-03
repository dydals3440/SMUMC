import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../../constants/size';
import background from '../../../assets/img/library.webp';
import theme from '../../../theme';

const EmogeBox = styled.div`
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
export { EmogeBox, descriptionWrapper, description };
