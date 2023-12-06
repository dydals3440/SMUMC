import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  font-weight: ${props => props.fontweight};
  cursor: pointer;

  div {
    margin-top: 5px;
    ${theme.ALIGN.ROW_CENTER}
  }
  img {
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    border: 1px solid black;
  }
`;

const Introduce = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 3rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  /* opacity: 0; */
  gap: 10px;
  h1 {
    font-size: ${FONT_SIZE.THREE_XL};
  }

  h2 {
    font-size: ${FONT_SIZE.SM};
  }

  span {
    border-radius: 3rem;
    padding: 10px;
    background-color: ${theme.COLOR.DARK.GRAY};
  }

  p {
    font-size: ${FONT_SIZE.XS};
  }

  &:hover {
    opacity: 1;
  }
`;
export { Container, ImageWrapper, Introduce };
