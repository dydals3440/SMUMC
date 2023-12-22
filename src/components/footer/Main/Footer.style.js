import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../../constants/size';
import SvgIcon from '@mui/material/SvgIcon';
import { FONT } from '../../../constants/font';

const FooterWrapper = styled.footer`
  width: 100%;
  bottom: 0;
  height: 150px;
  padding: 0 80px;

  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.GRAY : theme.COLOR.LIGHT.WHITE_GRAY};

  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  font-size: ${FONT_SIZE.FOUR_XL};

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    ${theme.ALIGN.COLUMN_CENTER};
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    ${theme.ALIGN.COLUMN_CENTER};
  }

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const InfoBox = styled.ul`
  list-style: none;
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
  font-size: 1rem;
  padding: 0;

  ${theme.ALIGN.COLUMN_CENTER}
`;

const DetailInfo = styled.li`
  padding: 5px 0;
  gap: 10px;

  ${theme.ALIGN.ROW_CENTER};
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    font-size: ${FONT_SIZE.XS};
    white-space: nowrap;
  }
`;

const Icon = styled(SvgIcon)`
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
`;

const SocialBox = styled.div``;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  svg {
    &:hover {
      transform: scale(1.1);
      color: ${theme.COLOR.LIGHT.YELLOW};
    }
  }
`;

const CreatorName = styled.p`
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
  font-family: ${FONT.IBM_PLEX_SANS_KR.THIN};
  font-size: ${FONT_SIZE.XS};

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    font-family: ${FONT.IBM_PLEX_SANS_KR.THIN};
    font-size: ${FONT_SIZE.XS};
  }
`;

const CreatorNameContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: ${FONT.IBM_PLEX_SANS_KR.THIN};
  font-size: ${FONT_SIZE.XS};
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    font-family: ${FONT.IBM_PLEX_SANS_KR.THIN};
    font-size: ${FONT_SIZE.XS};
    white-space: nowrap;
  }
`;

export {
  FooterWrapper,
  InfoBox,
  Icon,
  DetailInfo,
  SocialBox,
  LinkBox,
  CreatorName,
  CreatorNameContainer
};
