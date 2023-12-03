import { SliderCard } from "../../components/sliderCard/SliderCard";
import * as S from "./InfiniteSlider.style";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InfiniteSlider = ({
    cardWidth,
    cardHeight,
    dataList,
    slidesToShow = 3,
}) =>  {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
    };
    return (
        <S.Container>
            <S.StyledSlider {...settings}>
                {dataList.map((item, index) => {
                    return (
                        <S.ImageContainer key={index}>
                            <SliderCard title={item.title} src={item.src} width={cardWidth} height={cardHeight}/>
                        </S.ImageContainer>
                    );
                })}
            </S.StyledSlider  >
        </S.Container>  
    );
}

export default InfiniteSlider;