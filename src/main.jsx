import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';
import RootLayout from './layout/RootLayout';
import Homepage from './Page/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : ([
      {
        index : true, Component:Homepage,
      }
    ])
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
