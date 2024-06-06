import React from 'react';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import {createRoot} from "react-dom/client";
import EmailSubmit from "./components/EmailSubmit";
import './output.css';

const router = createBrowserRouter([
    {
        path: '/contact',
        element: (
            <EmailSubmit />
        )
    },
    {
        path: '/',
        element: (
            <div className={'dark:bg-gray-800 dark:text-white'}>
                <App/>
            </div>
        )
    }
])

createRoot(
    document.getElementById("root")
).render(<RouterProvider router={router}/>
);