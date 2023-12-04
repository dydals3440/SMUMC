import styled, { keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const infiniteAnimation1 = keyframes`
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(-100%);
    }
    50.1% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;

const infiniteAnimation2 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
`;

const Container = styled.div``;

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  padding: 40px 0;

  &::before {
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &.original {
    animation: ${infiniteAnimation1} 80s linear infinite normal none running;
  }
  &.clone {
    animation: ${infiniteAnimation2} 80s linear infinite;
  }
  &.stop {
    animation-play-state: paused;
  }
`;

const CardContainer = styled.div`
  margin: 0 10px;
  cursor: pointer;
  z-index: 2;
  transition: 0.3s;
  transform: scale(1);
  &:hover {
    transform: scale(0.98);
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  &.big {
    width: 280px;
    height: 280px;
  }
  &.small {
    width: 200px;
    height: 200px;
  }
`;

export { Container, SlideContainer, SlideWrapper, Slide, CardContainer };
