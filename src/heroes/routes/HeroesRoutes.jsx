import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage, SearchPage, HeroePage } from '../pages';

export const childHeroesRoutes = [
    { path: 'marvel', element: <MarvelPage /> },
    { path: 'dc', element: <DcPage /> },
    { path: 'search', element: <SearchPage /> },
    { path: 'hero/:id', element: <HeroePage /> },

    { path: '/', element: <Navigate to='/marvel'/> },
    { path: '/*', element: <Navigate to='/marvel'/> }
]

export const HeroesRoutes = () => {
  return (
      <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </>
  );
}
