import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CheckOutPage from './pages/Checkout.tsx';
import { SuccessPage } from './pages/Success.tsx';
import { FailPage } from './pages/Fail.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/payment',
    element: <CheckOutPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
  {
    path: '/fail',
    element: <FailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
