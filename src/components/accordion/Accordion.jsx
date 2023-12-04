import { useState } from 'react';

import * as S from './Accordion.style';
import { FAQS_TEXT } from '../../constants/info';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <S.Wrapper>
      <S.Accordions>
        {FAQS_TEXT.map(({ question, answer }, i) => (
          <S.Item key={i}>
            <S.Title onClick={() => toggle(i)}>
              <h2>{question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </S.Title>
            <S.Content show={selected === i}>{answer}</S.Content>
          </S.Item>
        ))}
      </S.Accordions>
    </S.Wrapper>
  );
};

export default Accordion;
