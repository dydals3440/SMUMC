import React from 'react';
import { FaqNavbar, FaqFooter } from '../../components';
import { Outlet } from 'react-router-dom';

const FaqLayout = () => {
  return (
    <>
      <FaqNavbar />
      <Outlet />
      <FaqFooter />
    </>
  );
};

export default FaqLayout;
