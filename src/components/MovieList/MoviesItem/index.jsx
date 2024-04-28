import React from 'react';
import { IMAGE } from '../../../constants/themoviedb';
import { DEFAULT_IMAGE_PATH } from '../../../constants/common';

import './assets/index.css';

const MovieItem = ({ title, img, onClick }) => {
  return (
    <li className="movie-item" onClick={onClick}>
      <img
        className="movie-item-img"
        src={img ? `${IMAGE}${img}` : DEFAULT_IMAGE_PATH}
        alt={title}
      />
      <p className="movie-item-text">{title}</p>
    </li>
  );
};

export default MovieItem;
