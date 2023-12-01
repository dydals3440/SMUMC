import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home, ErrorPage } from './pages';
import AppLayout from './pages/AppLayout';
import { BROWSER_PATH } from './constants/path';

const router = createBrowserRouter([
  {
    path: `${BROWSER_PATH.BASE}`,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
