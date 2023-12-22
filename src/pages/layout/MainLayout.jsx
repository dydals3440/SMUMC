import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../../components';
import { useSelector } from 'react-redux';

import Confetti from 'react-confetti';

import * as S from './MainLayout.style';
import drawSnow from '../../hooks/drawSnow';

const MainLayout = () => {
  const { isOpen } = useSelector(state => state.sidebar);
  // const width = window.innerWidth;
  // const height = document.body.scrollHeight;
  const { width, height } = useWindowSize();
  const darkMode = useSelector(state => state.darkMode);

  return (
    <S.Wrapper darkMode={darkMode}>
      <Confetti
        width={width}
        height={height}
        opacity={0.6}
        drawShape={drawSnow}
        tweenDuration={8000}
        numberOfPieces={200}
        gravity={0.05}
      />
      <Navbar />
      <Outlet />
      {isOpen && <Sidebar />}
      <Footer />
    </S.Wrapper>
  );
};

export default MainLayout;
