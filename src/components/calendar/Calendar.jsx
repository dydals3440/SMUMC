import { useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import * as S from './Calendar.style';
import { DAYS, MONTHS } from '../../constants/day';
import {
  areDatesTheSame,
  getDateObj,
  getDaysInMonth,
  getRandomDateColor,
  getSortedDays,
  range
} from '../../utils/date';

const Calendar = ({ startingDate, eventsArr, addEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  const DAYS_IN_A_MONTH = getDaysInMonth(currentMonth, currentYear);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(prev => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(prev => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    }
  };
  const onAddEvent = date => {
    addEvent(date, getRandomDateColor());
  };
  return (
    <S.Wrapper>
      <S.CalendarHead>
        <SvgIcon component={ArrowBackIcon} onClick={prevMonth} />
        <p>
          {MONTHS[currentMonth]} {currentYear}
        </p>
        <SvgIcon component={ArrowForwardIcon} onClick={nextMonth} />
      </S.CalendarHead>

      <S.SevenColGrid>
        {getSortedDays(currentMonth, currentYear).map(day => (
          <S.HeadDay>{day}</S.HeadDay>
        ))}
      </S.SevenColGrid>
      <S.CalendarBody fourCol={DAYS_IN_A_MONTH === 28}>
        {range(DAYS_IN_A_MONTH).map(day => (
          <S.StyleDay
            onClick={() =>
              onAddEvent(getDateObj(day, currentMonth, currentYear))
            }
            active={areDatesTheSame(
              new Date(),
              getDateObj(day, currentMonth, currentYear)
            )}
          >
            <p>{day}</p>
            {eventsArr.map(
              ev =>
                areDatesTheSame(
                  getDateObj(day, currentMonth, currentYear),
                  ev.date
                ) && (
                  <S.StyledEvent bgColor={ev?.color}>{ev.title}</S.StyledEvent>
                )
            )}
          </S.StyleDay>
        ))}
      </S.CalendarBody>
    </S.Wrapper>
  );
};

export default Calendar;
