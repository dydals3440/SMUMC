import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';
import { Link } from 'react-router-dom';

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
    border: 10px solid ${theme.COLOR.PRIMARY.BLUE_LIGHT};
  }
`;

const Introduce = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 3rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
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

  &:hover {
    opacity: 1;
  }
`;

const MemberWrapper = styled.div`
  width: 80%;
  white-space: pre-line;
  flex-wrap: wrap;
  gap: 12px;
`;

const Member = styled.p`
  margin: 0 2px;
  font-size: ${FONT_SIZE.XS};
  white-space: pre-wrap;

  border: 1px solid ${theme.COLOR.LIGHT.YELLOW};
  padding: 5px 4px;
  border-radius: 5px;
`;

const LinkWrapper = styled.div`
  color: white;
  ${theme.ALIGN.ROW_CENTER};
  gap: 20px;
`;

const LinkSite = styled(Link)`
  color: ${theme.COLOR.LIGHT.WHITE_GRAY};

  &:hover {
    transform: scale(1.2);
  }
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.2);
  }
`;

export {
  Container,
  ImageWrapper,
  Introduce,
  MemberWrapper,
  Member,
  LinkSite,
  LinkWrapper,
  Image
};
