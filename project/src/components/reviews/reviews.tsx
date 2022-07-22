import Review from '../review/review';
import { comments } from '../../mocks/comments';

function Reviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.map((review) =>
            <Review key={review.id} review={review} />)
        }
      </div>
    </div>
  );
}

export default Reviews;
