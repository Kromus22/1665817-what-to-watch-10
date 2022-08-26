import { useState, FormEvent, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { DEFALUT_RATING_VALUE } from '../../const';
import { addReviewAction } from '../../store/api-actions';
import { useValidComment } from '../../hooks/use-valid-comm';
import { getCommentError, getIsSendingComment } from '../../store/add-review-process/selectors';
import { AppRoute } from '../../const';


function SendingReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(DEFALUT_RATING_VALUE);
  const isSending = useAppSelector(getIsSendingComment);
  const error = useAppSelector(getCommentError);
  const isValidForm = useValidComment(comment, rating);
  const navigate = useNavigate();

  const onReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addReviewAction([params.id, { comment, rating }]));
    navigate(`${AppRoute.Films}${params?.id}`);
  };

  const starsButtonList = Array.from({ length: 10 }, (_, i) => {
    const key = String(10 - i);

    return (
      <Fragment key={key}>
        <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={`${key}`} onChange={(evt) => setRating(Number(evt.currentTarget.value))} />
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </Fragment>);
  });

  return (
    <form action="#" className="add-review__form" onSubmit={onReviewFormSubmit}>
      {
        error &&
        <div className="add-review__message">
          <p data-testid="comment-error">{error}</p>
        </div>
      }
      <div className="rating">
        <div className="rating__stars">
          {starsButtonList}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(evt) => setComment(evt.target.value)}
          disabled={isSending}
          data-testid="text-comment"
        />
      </div>
      <div className="add-review__submit">
        <button
          className="add-review__btn"
          type="submit"
          disabled={isSending || !isValidForm}
        >Post
        </button>
      </div>
    </form>
  );
}

export default SendingReviewsForm;
