import styled from 'styled-components';
import theme from '../../theme';
import { FONT } from '../../constants/font';
import { FONT_SIZE } from '../../constants/size';

const Wrapper = styled.div`
  margin: 40px 0;
  height: 100%;
  width: 100%;

  ${theme.ALIGN.ROW_CENTER}
`;

const Accordions = styled.div`
  width: 1000px;
`;

const Item = styled.div`
  background-color: ${theme.COLOR.LIGHT.BEIGE};
  margin-bottom: 5px;
  padding: 30px 40px;
`;

const Title = styled.div`
  color: ${theme.COLOR.DARK.BROWN};
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  font-size: ${FONT_SIZE.XL};
  cursor: pointer;

  &:hover {
    span {
      transform: scale(2);
    }
  }
`;

const Content = styled.div`
  color: ${theme.COLOR.DARK.BEIGE_BROWN};
  max-height: ${props => (props.show ? '9999px' : '0')};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  font-size: ${FONT_SIZE.XL};
  margin-top: 20px;
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  height: ${props => (props.show ? 'auto' : '')};
`;

export { Wrapper, Accordions, Item, Title, Content };
