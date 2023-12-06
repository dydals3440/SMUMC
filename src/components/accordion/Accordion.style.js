import styled from 'styled-components';
import theme from '../../theme';
import { FONT } from '../../constants/font';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';

const Wrapper = styled.div`
  margin: 40px 0;
  height: 100%;
  width: 100%;
  padding: 10px;

  ${theme.ALIGN.ROW_CENTER};

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    padding: 20px;
  }
`;

const Accordions = styled.div`
  width: 1000px;
`;

const Item = styled.div`
  background-color: ${theme.COLOR.PRIMARY.BLUE_SECONDARY};
  margin-bottom: 5px;
  padding: 0 20px;
  border-radius: 10px;

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: ${theme.COLOR.DARK.GRAY};
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  font-size: ${FONT_SIZE.XS};
  cursor: pointer;

  h2 {
    margin-top: 20px;
  }

  &:hover {
    span {
      transform: scale(2);
    }
  }

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h2 {
      margin-top: 20px;
      font-size: ${FONT_SIZE.BASE};
    }
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    h2 {
      margin-top: 25px;
      font-size: ${FONT_SIZE.BASE};
    }
  }
`;

const Content = styled.div`
  color: ${theme.COLOR.DARK.LIGHT_GRAY};
  max-height: ${props => (props.show ? '9999px' : '0')};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  font-size: ${FONT_SIZE.XL};
  margin-top: 20px;
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  height: ${props => (props.show ? 'auto' : '')};

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    font-size: ${FONT_SIZE.XS};
  }
`;

export { Wrapper, Accordions, Item, Title, Content };
