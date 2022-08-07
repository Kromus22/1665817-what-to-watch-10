import { Link } from 'react-router-dom';

type AddReviewBtnProps = {
  id: number | undefined;
}

function AddReviewButton({ id }: AddReviewBtnProps): JSX.Element {
  return (
    <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
  );
}

export default AddReviewButton;
