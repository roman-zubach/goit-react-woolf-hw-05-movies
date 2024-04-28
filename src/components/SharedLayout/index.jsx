import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../../common/components';

import './assets/index.css';

export const SharedLayout = () => {
  return (
    <div>
      <div className='header'>
        <nav>
          <ul className='navigation'>
            <li className='navigation-item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to='/movies'>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='container'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
