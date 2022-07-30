import { CARDS_PER_STEP } from '../../const';

type ShowMoreButtonProps = {
  showCount: number;
  changeShowCount: (count: number) => void;
}

function ShowMoreButton({ showCount, changeShowCount }: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => changeShowCount(showCount + CARDS_PER_STEP)}>Show more</button>
    </div>
  );

}

export default ShowMoreButton;
