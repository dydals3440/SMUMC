import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../index.css';

import { PROJECTS } from '../../constants/projects';
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
        {PROJECTS.map(({ id, img, year, description, name, member }) => (
          <CardMember
            id={id}
            img={img}
            year={year}
            description={description}
            name={name}
            member={member}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default InfiniteSlider;
