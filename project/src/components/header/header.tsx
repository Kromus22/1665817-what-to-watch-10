import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/useDispatch';
import { logoutAction } from '../../store/api-actions';
import className from 'classnames';
import { getAuth, getAvatar } from '../../store/user-process/selectors';

type HeaderProps = {
  isMyList?: boolean;
  favoriteCount?: number;
}

function Header({ isMyList, favoriteCount }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuth);
  const avatarUrl = useAppSelector(getAvatar);
  const dispatch = useAppDispatch();

  return (
    <header className={className('page-header', isMyList ? 'user-page__head' : 'film-card__head')}>
      <Logo />
      {isMyList ?
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteCount}</span></h1> :
        null}

      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item" >
            <Link to={AppRoute.MyList} >
              <div className="user-block__avatar">
                <img src={avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </li >
          <li className="user-block__item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to="#"
              className="user-block__link"
            >Sign out
            </Link>
          </li>
        </ul >
        :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}

    </header>
  );
}

export default Header;
