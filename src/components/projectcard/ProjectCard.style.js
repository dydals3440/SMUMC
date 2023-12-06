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
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    border: 1px solid black;
  }

  span {
    position: absolute;
    margin-bottom: 80px;
    margin-left: 20px;
    padding: 8px;
    background-color: #e5e5e5;
    width: auto;
    border-radius: 0.5rem;
    font-size: ${FONT_SIZE.SM};
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

export { Container, ImageWrapper };
