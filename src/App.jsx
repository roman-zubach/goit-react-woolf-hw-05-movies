import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const Movie = lazy(() => import('./pages/Movie'));
const Cast = lazy(() => import('./pages/Movie/Cast'));
const Reviews = lazy(() => import('./pages/Movie/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<Movie />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
