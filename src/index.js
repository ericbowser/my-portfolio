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
            <EmailSubmit/>
        )
    },
    {
        path: '/',
        element: (
            <App/>
        )
    }
])

createRoot(
    document.getElementById("root")
).render(<RouterProvider router={router}/>
);