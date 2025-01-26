import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {About} from "./components/About";
import {Error} from "./components/Error";
import {Contact} from "./components/Contact";
import { RestaurantMenu } from './components/RestaurantMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Body />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

// Converts the passed reactElement into browser node and append it to root
root.render(
  <RouterProvider router={appRoutes}/>
);
