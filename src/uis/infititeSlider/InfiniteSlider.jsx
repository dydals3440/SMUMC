import * as S from './InfiniteSlider.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderCard } from '../../components';
import { useState } from 'react';

const InfiniteSlider = ({ cardWidth, cardHeight, dataList }) => {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <S.Container>
      <S.SlideContainer>
        <S.SlideWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
          <S.Slide className={'original'.concat(animate ? '' : ' stop')}>
            {dataList.map((item, index) => (
              <S.CardContainer>
                <SliderCard
                  key={index}
                  title={item.title}
                  src={item.src}
                  width={cardWidth}
                  height={cardHeight}
                />
              </S.CardContainer>
            ))}
          </S.Slide>
          <S.Slide className={'clone'.concat(animate ? '' : ' stop')}>
            {dataList.map((item, index) => (
              <S.CardContainer>
                <SliderCard
                  key={index}
                  title={item.title}
                  src={item.src}
                  width={cardWidth}
                  height={cardHeight}
                />
              </S.CardContainer>
            ))}
          </S.Slide>
        </S.SlideWrapper>
      </S.SlideContainer>
    </S.Container>
  );
};

export default InfiniteSlider;
