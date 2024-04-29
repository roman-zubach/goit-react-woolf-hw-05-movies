import { Link, useLocation } from 'react-router-dom';
import { IMAGE } from '../../../constants/themoviedb';
import { DEFAULT_IMAGE_PATH } from '../../../constants/common';

import './assets/index.css';

const MovieItem = ({ id, title, img }) => {
  const location = useLocation();

  return (
    <li className="movie-item">
      <Link to={`/movies/${id}`} className='movie-item-link' state={location}>
        <img
          className="movie-item-img"
          src={img ? `${IMAGE}${img}` : DEFAULT_IMAGE_PATH}
          alt={title}
        />
        <p className="movie-item-text">{title}</p>
      </Link>
    </li>
  );
};

export default MovieItem;
