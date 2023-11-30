import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
