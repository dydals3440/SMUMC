import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home, ErrorPage } from './pages';
import AppLayout from './pages/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
