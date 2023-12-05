import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Wrapper = styled.div`
  background-color: ${theme.COLOR.DARK.NAVY};
  border-radius: 20px;
  width: 100%;

  border: 1px solid black;
  height: 90%;
  margin: 5px;
  padding: 20px;
`;

const CalendarHead = styled.span`
  width: 100%;
  height: 80px;
  ${theme.ALIGN.ROW_CENTER}
  justify-content: space-around;
  font-size: 45px;
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  color: ${theme.COLOR.LIGHT.WHITE};

  margin-bottom: 20px;

  svg {
    font-size: 80px;
    color: ${theme.COLOR.PRIMARY.BLUE_PALE};
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SevenColGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 30px;
  color: ${theme.COLOR.DARK.VULCAN};
`;

const HeadDay = styled.span`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
  background-color: ${theme.COLOR.PRIMARY.BLUE_PALE};
  font-size: 1.2rem;
  border: 2px solid black;
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
`;

const CalendarBody = styled.div`
  height: 100%;
  font-size: ${FONT_SIZE.L};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${({ fourCol }) => (fourCol ? 4 : 5)}, 1fr);
  font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
  color: ${theme.COLOR.LIGHT.WHITE};
  border: 1px solid white;
`;

const StyleDay = styled.span`
  border: 0.8px solid;
  text-align: right;
  padding: 10px;
  ${({ active }) =>
    active && `background: ${theme.COLOR.PRIMARY.BLUE_SECONDARY}`}
  color: ${theme.COLOR.LIGHT.WHITE};
`;

const StyledEvent = styled.span`
  display: grid;
  text-align: left;
  background: ${({ bgColor }) => bgColor || theme.COLOR.PRIMARY.BLUE};
  color: ${theme.COLOR.LIGHT.WHITE};
  padding: 2px 5px;
  border-radius: 8px;
`;

export {
  Wrapper,
  CalendarHead,
  SevenColGrid,
  HeadDay,
  CalendarBody,
  StyleDay,
  StyledEvent
};
