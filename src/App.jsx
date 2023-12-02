import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  ErrorPage,
  FaqPage,
  ProjectsPage,
  MembersPage,
  MembersActivePage,
  MembersAllPage,
  ProjectsDetailPage,
  MembersDetailPage,
  NoticesPage
} from './pages';
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
      },
      {
        path: `${BROWSER_PATH.PROJECTS.BASE}`,
        element: <ProjectsPage />
      },
      {
        path: `${BROWSER_PATH.PROJECTS.DETAIL}`,
        element: <ProjectsDetailPage />
      },
      // 필요하면쓰고, 아님 빼도 될꺼같습니다. (전체 멤버 페이지)
      {
        path: `${BROWSER_PATH.MEMBERS.BASE}`,
        element: <MembersPage />
      },
      // 멤버 개인의 세부 페이지
      {
        path: `${BROWSER_PATH.MEMBERS.DETAIL}`,
        element: <MembersDetailPage />
      },
      // 활동 회원 페이지
      {
        path: `${BROWSER_PATH.MEMBERS.ACTIVE}`,
        element: <MembersActivePage />
      },
      // 구성원 목록 페이지
      {
        path: `${BROWSER_PATH.MEMBERS.ALL}`,
        element: <MembersAllPage />
      },
      // 공지사항 페이지
      {
        path: `${BROWSER_PATH.NOTICES.BASE}`,
        element: <NoticesPage />
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
        // 세부 공지사항 페이지
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
