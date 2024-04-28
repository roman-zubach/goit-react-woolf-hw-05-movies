import { SMALL_IMAGE } from '../../../constants/themoviedb';
import { DEFAULT_IMAGE_PATH } from '../../../constants/common';
import { dateToString } from '../../../common/helpers/date/dateToString';

import './assets/index.css';

export const Review = ({ author, img, createdAt, content }) => {
  return (
    <li className="review-card">
      <div className="review-header">
        <div className='review-author'>
          <img
            className="review-author-img"
            src={img ? `${SMALL_IMAGE}${img}` : DEFAULT_IMAGE_PATH}
            alt={author}
          />
          <h3 className="review-author-name">{author}</h3>
        </div>
        <p className='review-date'>{dateToString(createdAt)}</p>
      </div>
      <p className="review-content">{content}</p>
    </li>
  );
};
