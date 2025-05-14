import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Body } from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import Instamart from './components/Instamart';

const Grocery = lazy(() => import('./components/Instamart'))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<h1>loading...</h1>}>
                    <Instamart />
                </Suspense>
            },

            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "/menu/:id",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);
