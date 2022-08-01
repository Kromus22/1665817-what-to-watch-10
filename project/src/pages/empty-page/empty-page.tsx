import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function EmptyPage(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="Some background" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <div className="user-block">
            <a href="sign-in.html" className="user-block__link">Sign in</a>
          </div>
        </header>

      </section>
      <div>
        <p>404 Not Found</p>

        <Link to="/">Go to main page</Link>
      </div>
    </>

  );
}

export default EmptyPage;
