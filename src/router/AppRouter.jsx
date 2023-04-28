import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth';
import { MarvelPage, DcPage } from '../heroes';

export const appRoutes = [
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            { path: 'marvel', element: <MarvelPage /> },
            { path: 'dc', element: <DcPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: '/', element: <Navigate to="/marvel"/> }
        ]
    }
];

const router = createBrowserRouter( appRoutes );

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
}
