import { Link, generatePath } from 'react-router-dom';
import { APIRoute } from '../../const';

type AddReviewBtnProps = {
  id?: number;
}

function AddReviewButton({ id }: AddReviewBtnProps): JSX.Element {
  const path = generatePath(APIRoute.AddReview, {
    id: String(id),
    '*': 'review',
  });

  return (
    <Link to={path} className="btn film-card__button">Add review</Link>
  );
}

export default AddReviewButton;
