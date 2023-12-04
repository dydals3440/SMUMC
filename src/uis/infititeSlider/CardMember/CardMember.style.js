import styled from 'styled-components';
import { FONT_SIZE } from '../../../constants/size';

const CardWrapper = styled.div`
  border: 1px solid #fff;
  background: black;
  border-radius: 8px;
  overflow: hidden;

  height: 400px;
  color: #fff;
  cursor: pointer;
`;

const CardTop = styled.div`
  p {
    font-size: ${FONT_SIZE.SM};
    margin: 20px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: black;
  }
`;
const CardBottom = styled.div`
  margin: 10px 20px;
`;

const CardCategory = styled.div`
  position: relative;

  &::before {
    content: '';
    background: rgb(255, 61, 61);
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    height: 2px;
  }
`;

export { CardWrapper, CardTop, CardBottom, CardCategory };
