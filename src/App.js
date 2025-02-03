import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {About} from "./components/About";
import {Error} from "./components/Error";
import {Contact} from "./components/Contact";
import { RestaurantMenu } from './components/RestaurantMenu';
// import {Grocery} from "./components/Grocery";


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

/**
 * Lazy loading of components with named exports
 *
 */
// const Grocery = lazy(() => import('./components/Grocery').then((module => ({default: module.Grocery}))));

/**
 * Lazy loading of components with default exports
 *
 */
const Grocery = lazy(() => import('./components/Grocery'));

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
        path: "grocery",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>,
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
