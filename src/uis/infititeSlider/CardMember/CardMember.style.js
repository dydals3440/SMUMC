import styled from 'styled-components';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../../constants/size';
import theme from '../../../theme';

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
  height: 250px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: black;
  }
`;
const CardBottom = styled.div`
  margin: 0px 20px;

  h3 {
    font-size: ${FONT_SIZE.BASE};
    margin-bottom: 10px;
  }
`;

const CardCategory = styled.div`
  height: 100px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: rgb(255, 61, 61);
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    height: 2px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}

  h2 {
    font-size: ${FONT_SIZE.TWO_XL};
    margin-top: 20px;
  }
`;

const MemberWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Member = styled.div`
  display: inline-block;
  margin: 0 5px;
  padding: 0px 5px;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-size: ${FONT_SIZE.XS};
  border-radius: 5px;
  border: 1px solid ${theme.COLOR.LIGHT.YELLOW};

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    // 모바일 사이즈일 때 깨짐
  }
`;

export {
  CardWrapper,
  CardTop,
  CardBottom,
  CardCategory,
  Wrapper,
  MemberWrapper,
  Member
};
