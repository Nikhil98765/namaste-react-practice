import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Error} from "./components/Error";
import {Contact} from "./components/Contact";
import { RestaurantMenu } from './components/RestaurantMenu';
import {UserContext} from "./utils/UserContext";
// import {Grocery} from "./components/Grocery";


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const data = {
      name: 'Nikhil'
    };
    setUserName(data.name);
  }, []);

  return (
    // loggedInUser = 'Default User'
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    {/*  loggedInUser = 'example name' */}
    <div className="app">
      {/*<UserContext.Provider value={{loggedInUser: userName}}>*/}
        {/*  loggedInUser = 'Nikhil' */}
      <Header />
      {/*</UserContext.Provider>*/}
      <Outlet />
    </div>
    </UserContext.Provider>
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
const About = lazy(() =>  import('./components/About').then(module => ({default: module.About})));

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
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          </Suspense>
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
