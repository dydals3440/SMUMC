import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ImgBanner = styled.img`
  display: flex;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TabContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  height: 50px;
  gap: 25px;
  background-color: ${theme.COLOR.LIGHT.WHITE_GRAY};
`;

const TabButton = styled.button`
  display: flex;
  color: ${props => props.color};
  font-size: ${FONT_SIZE.XL};
  font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export { Wrapper, ImgBanner, TabContainer, TabButton };
