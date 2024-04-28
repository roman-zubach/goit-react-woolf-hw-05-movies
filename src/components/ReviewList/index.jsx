import { Review } from './Review';

export const ReviewList = ({items}) => {
  return (
    <ul className="review-items">
      {items.map(({ id, author, content, created_at, author_details }) => (
        <Review
          key={id}
          author={author}
          content={content}
          createdAt={new Date(created_at)}
          img={author_details?.avatar_path}
        />
      ))}
    </ul>
  );
};
