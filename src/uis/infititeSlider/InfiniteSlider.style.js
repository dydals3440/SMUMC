import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
    overflow: hidden;
    z-index: 50000;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
    margin: 0 16px;
`;

export { Container, StyledSlider, ImageContainer };