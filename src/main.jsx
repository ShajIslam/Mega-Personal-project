import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Login from './Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
