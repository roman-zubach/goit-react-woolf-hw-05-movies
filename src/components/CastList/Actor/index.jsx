import { SMALL_IMAGE } from '../../../constants/themoviedb';
import { DEFAULT_IMAGE_PATH } from '../../../constants/common';

import './assets/index.css'

export const Actor = ({name, character, img}) => {
  return (
    <li className="actor">
      <img
        className="actor-img"
        src={img ? `${SMALL_IMAGE}${img}` : DEFAULT_IMAGE_PATH}
        alt={name}
      />
      <h3 className="actor-name">{name}</h3>
      <p className="actor-role">Character: {character}</p>
    </li>
  );
};
