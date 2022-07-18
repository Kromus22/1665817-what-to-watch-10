
import { ChangeEvent, useState } from 'react';

function SendingReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    'review-text': '',
  });

  const fieldChangeHandler = (evt: ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const starsButtonList = Array.from({ length: 10 }, (_, i) => {
    const key = String(10 - i);

    return (
      <>
        <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={`${key}`} onChange={fieldChangeHandler} />
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </>);
  });

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {starsButtonList}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={fieldChangeHandler}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default SendingReviewsForm;
