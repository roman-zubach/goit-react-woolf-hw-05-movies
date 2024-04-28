import { IMAGE } from '../../constants/themoviedb';
import { DEFAULT_IMAGE_PATH } from '../../constants/common';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import './assets/index.css';

export const MovieDetails = ({ movie }) => {
  const { state } = useLocation();

  const {
    poster_path: img,
    overview,
    title,
    genres,
    vote_average,
  } = movie;

  const userScore = Math.round(vote_average * 10);

  return (
    <div className="movie-detail">
      <div className="movie-detail-card">
        <img
          className="movie-detail-card-img"
          src={img ? `${IMAGE}${img}` : DEFAULT_IMAGE_PATH}
          alt={title}
        />
        <div className="movie-detail-card-body">
          <div className="movie-detail-card-body-group">
            <h2 className="movie-detail-card-body-title">{title}</h2>
            <p className="movie-detail-card-body-score">User score: {userScore}%</p>
          </div>
          <div className="movie-detail-card-body-group">
            <h3 className="movie-detail-card-body-secondary-title">Overview</h3>
            <p className="movie-detail-card-body-text">{overview}</p>
          </div>
          <div className="movie-detail-card-body-group">
            <h3 className="movie-detail-card-body-secondary-title">Genders</h3>
            <p className="movie-detail-card-body-text">{genres.map(({ name }) => name).join(' ')}</p>
          </div>
        </div>
      </div>
      <div className="additional">
        <div className="additional-links">
          <NavLink to={'cast'} state={state} className="tab-link">Cast</NavLink>
          <NavLink to={'reviews'} state={state} className="tab-link">Reviews</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
