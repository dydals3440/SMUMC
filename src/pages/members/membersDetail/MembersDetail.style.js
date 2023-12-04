import styled from 'styled-components';
import theme from '../../../theme';
import { FONT } from '../../../constants/font';
import { FONT_SIZE } from '../../../constants/size';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  gap: 35px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  p {
    display: flex;
    color: ${theme.MAIN_COLOR.CONTENT};
    font-family: ${FONT.IBM_PLEX_SANS_KR.REGULAR};
  }

  h3 {
    display: flex;
    color: ${theme.MAIN_COLOR.CONTENT};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }

  h5 {
    display: flex;
    color: ${theme.COLOR.DARK.LIGHT_GRAY};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h5 {
    display: flex;
    color: ${theme.COLOR.DARK.LIGHT_GRAY};
    font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
    font-size: ${FONT_SIZE.XL};
  }
`;

const ColumnCenterContainer = styled(ColumnContainer)`
  align-items: center;
`;

const MemberContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 45px;
`;

const MemberImg = styled.img`
  width: 180px;
  height: 270px;
`;

const GitChartImg = styled.img`
  width: 750px;
  padding: 20px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    display: none;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

const MemberProjectContainer = styled.div``;

export {
  Container,
  RowContainer,
  ColumnContainer,
  MemberContainer,
  MemberImg,
  GitChartImg,
  MemberProjectContainer,
  ColumnCenterContainer
};
