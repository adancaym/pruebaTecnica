import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Providers } from '../pages/providers/Providers';
import { Main } from '../layouts/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/providers',
        element: <Providers />,
      },
    ],
  },
]);
