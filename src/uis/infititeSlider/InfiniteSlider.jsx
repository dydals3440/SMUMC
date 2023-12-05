import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../index.css';
import { MEMBERS } from '../../constants/members';
import * as S from './InfiniteSlider.style';

import CardMember from './CardMember/CardMember';

const InfiniteSlider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {MEMBERS.map(({ id, github, name, nickname }) => (
          <CardMember id={id} github={github} name={name} nickname={nickname} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default InfiniteSlider;
