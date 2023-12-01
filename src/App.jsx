import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage, ErrorPage, FaqPage } from './pages';
import { FaqLayout, MainLayout } from './pages/layout';
import { BROWSER_PATH } from './constants/path';

const router = createBrowserRouter([
  {
    // 경로: '/'
    path: `${BROWSER_PATH.BASE}`,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    // 세부 경로들은 children에 적으면 됩니다.
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  // 경로: '/faqs'
  {
    path: `${BROWSER_PATH.FAQS.BASE}`,
    element: <FaqLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // /faq
        index: true,
        element: <FaqPage />
      },
      {
        // /faq/1~무제한
        path: ':id',
        element: <FaqPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
