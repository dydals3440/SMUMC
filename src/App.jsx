import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  ErrorPage,
  ProjectsPage,
  MembersPage,
  MembersActivePage,
  MembersAllPage,
  ProjectsDetailPage,
  MembersDetailPage,
  NoticesPage
} from './pages';
import { MembersLayout, MainLayout } from './pages/layout';
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
      },
      {
        path: `${BROWSER_PATH.PROJECTS.BASE}`,
        element: <ProjectsPage />
      },
      {
        path: `${BROWSER_PATH.PROJECTS.DETAIL}`,
        element: <ProjectsDetailPage />
      },
      // 경로 '/notices'
      {
        path: `${BROWSER_PATH.NOTICES.BASE}`,
        element: <NoticesPage />
      }
    ]
  },
  // 경로: '/members'
  {
    path: `${BROWSER_PATH.MEMBERS.BASE}`,
    element: <MembersLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MembersPage />
      },
      {
        path: `${BROWSER_PATH.MEMBERS.ACTIVE}`,
        element: <MembersActivePage />
      },
      {
        path: `${BROWSER_PATH.MEMBERS.DETAIL}`,
        element: <MembersDetailPage />
      },
      {
        path: `${BROWSER_PATH.MEMBERS.ALL}`,
        element: <MembersAllPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
