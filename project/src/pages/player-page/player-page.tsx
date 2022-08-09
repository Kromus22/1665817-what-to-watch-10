import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import EmptyPage from '../empty-page/empty-page';
import { useEffect } from 'react';
import { fetchFilm } from '../../store/api-actions';


function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(params.id));
  }, [dispatch, params.id]);

  const onExitButtonClickHandler = () => {
    const path = `/films/${film.id}`;
    navigate(path);
  };

  if (!film.name) {
    return <EmptyPage />;
  }

  return (
    <div className="player">
      <video src={film.previewVideoLink} className="player__video" poster={film.previewImage}></video>

      <button type="button" className="player__exit" onClick={onExitButtonClickHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
