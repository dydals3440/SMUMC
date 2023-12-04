import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 50px;
  background-color: ${theme.COLOR.DARK.BLACK};
  width: 100%;
  padding: 10px;

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const Contents = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  position: relative;
  width: 1000px;
  height: 200px;
  border-radius: 30px;
  background-color: ${theme.COLOR.DARK.GRAY};

  h1,
  p {
    top: 100px;
    color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  }

  @media (max-width: ${parseInt(RESPONSIVE_SIZE.PC) + 100}px) {
    width: 100%;
    padding-left: 10%;
    h1 {
      font-size: ${FONT_SIZE.FOUR_XL};
    }
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER}
    padding: 0%;
  }
`;

const TextBox = styled.div`
  margin: auto;
  width: 500px;
  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h1 {
      font-size: ${FONT_SIZE.THREE_XL};
    }
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER};
    h1 {
      font-size: ${FONT_SIZE.XL};
    }

    p {
      font-size: ${FONT_SIZE.SM};
    }
  }
`;

const Img = styled.img`
  border-radius: 0px 30px 30px 0px;

  width: 40%;
  height: 100%;
  object-fit: cover;
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 100%;
    height: 70%;
    border-radius: 0px 0px 30px 30px;
  }
`;

export { Container, ContentBox, Contents, TextBox, Img };
