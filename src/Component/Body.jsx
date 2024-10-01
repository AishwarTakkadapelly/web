import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import SignIn from './SighnIn';
import SignUp from './SignUp';
import Platform from './Platform';
import ContactUs from './ContactUs';
import Pricing from './Pricing';
import Documentation from './Documentation';
import Resources from './Resources';
import Solutions from './Solutions';


const appRouter = createBrowserRouter([
    {
     path: '/',
     element: <Layout />,
     children: [
       { path: '/', element: <SignIn /> },
       { path: '/signup', element: <SignUp /> },
       { path: '/platform', element: <Platform /> },
       { path: '/contactus', element: <ContactUs /> },
       { path: '/pricing', element: <Pricing /> },
       { path: '/documentation', element: <Documentation /> },
       { path: '/resources', element: <Resources /> },
       { path: '/solutions', element: <Solutions /> }
     ]
   }
   ]);

const Body = () => {
  
    return <RouterProvider router={appRouter} />;
}

export default Body;
