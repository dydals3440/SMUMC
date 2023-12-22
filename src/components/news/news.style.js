import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';
const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 50px;
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.BLACK : theme.COLOR.LIGHT.WHITE};
  width: 100%;

  @media (max-width: ${parseInt(RESPONSIVE_SIZE.PC) + 100}px) {
    ${theme.ALIGN.COLUMN_CENTER};
  }

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Contents = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  position: relative;
  width: 500px;
  height: 650px;
  border-radius: 30px;
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.GRAY : theme.COLOR.LIGHT.WHITE_GRAY};

  h2 {
    color: ${props =>
      props.darkMode ? theme.COLOR.LIGHT.WHITE_GRAY : theme.COLOR.DARK.BLACK};
    font-size: ${FONT_SIZE.FOUR_XL};
    border-bottom: 1px solid
      ${props =>
        props.darkMode ? theme.COLOR.LIGHT.WHITE_GRAY : theme.COLOR.DARK.BLACK};
    margin: 15px 0;
  }

  h3 {
    font-size: ${FONT_SIZE.SM};
    color: ${props =>
      props.darkMode ? theme.COLOR.LIGHT.WHITE_GRAY : theme.COLOR.DARK.BLACK};
  }

  @media (max-width: ${parseInt(RESPONSIVE_SIZE.PC) + 100}px) {
    width: 70%;
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER}
    padding: 0%;
    height: 500px;
  }
`;

const TextBox = styled.div`
  margin: auto;
  padding: 20px;
  height: 30%;

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h2 {
      font-size: ${FONT_SIZE.THREE_XL};
    }
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER};
    height: 40%;
    h2 {
      font-size: ${FONT_SIZE.LG};
      position: relative;
    }

    h3 {
      font-family: ${FONT.IBM_PLEX_SANS_KR.LIGHT};
      font-size: ${FONT_SIZE.XS};
    }
  }
`;

const Img = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  width: 100%;
  height: 70%;
  object-fit: cover;

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 100%;
    height: 60%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

export { Container, ContentBox, Contents, TextBox, Img };
