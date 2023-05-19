import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes, childHeroesRoutes } from '../heroes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const appRoutes = [
    { 
        path: 'login', 
        element: 
            <PublicRoutes>
                <LoginPage />
            </PublicRoutes>
    },
    {
        path: '/',
        element:
            <PrivateRoutes>
                <HeroesRoutes />
            </PrivateRoutes>,
        children: childHeroesRoutes
    }
];

const router = createBrowserRouter( appRoutes );

export const AppRouter = () => {
    return (
        <RouterProvider router={ router } />
    );
}
