import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import SignUp from './components/Signup';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='signup' element={<SignUp />} />
        </Route>
    )
)

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
