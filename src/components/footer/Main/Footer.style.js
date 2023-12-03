import styled from 'styled-components';
import theme from '../../../theme';
import { FONT_SIZE } from '../../../constants/size';
import SvgIcon from '@mui/material/SvgIcon';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding: 0 80px;

  background-color: ${theme.COLOR.DARK.GRAY};

  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  font-size: ${FONT_SIZE.FOUR_XL};
`;

const InfoBox = styled.ul`
  list-style: none;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-size: 1rem;
  padding: 0;

  ${theme.ALIGN.COLUMN_CENTER}
`;

const DetailInfo = styled.li`
  width: 500px;
  padding: 5px 0;
  gap: 10px;

  ${theme.ALIGN.ROW_CENTER};
`;

const Icon = styled(SvgIcon)`
  color: ${theme.COLOR.LIGHT.WHITE};
`;

const SocialBox = styled.div``;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export { FooterWrapper, InfoBox, Icon, DetailInfo, SocialBox, LinkBox };
