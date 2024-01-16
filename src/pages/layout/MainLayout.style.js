import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.NAVY : theme.COLOR.LIGHT.WHITE};
  height: 100vdh;

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const OutletWrapper = styled.div`
  flex: 1;
`;

export { Wrapper, ContentWrapper, OutletWrapper };
