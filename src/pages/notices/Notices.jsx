import { useState } from 'react';

import * as S from './Notices.style';
import { Calendar } from '../../components';
import { MOCK_EVENTS } from '../../constants/day';
import Accordion from '../../components/accordion/Accordion';

const Notices = () => {
  const [events, setEvents] = useState(MOCK_EVENTS);
  const addEvent = (date, color) => {
    const text = window.prompt('추가하고 싶은 일정을 입력해주세요!');
    if (text === '') {
      alert('추가할 내용은 공백이 될 수 없습니다.');
      return;
    }
    setEvents(prev => [...prev, { date, title: text, color }]);
  };
  return (
    <S.Wrapper>
      <h1>UMC 일정안내</h1>
      <Calendar
        startingDate={new Date()}
        eventsArr={events}
        addEvent={addEvent}
      />
      <h1>UMC 질문리스트</h1>
      <Accordion />
    </S.Wrapper>
  );
};

export default Notices;
