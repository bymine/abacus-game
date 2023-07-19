import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { PAGES } from './constants';
import { IntroPage, MainPage, ResultPage } from './pages';

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: PAGES.Intro,
          element: <IntroPage />,
        },
        {
          path: PAGES.MAIN,
          element: <MainPage />,
        },
        {
          path: PAGES.Result,
          element: <ResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
