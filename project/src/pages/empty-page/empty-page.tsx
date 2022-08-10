import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './empty-page.css';


function EmptyPage(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="Some background" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

      </section>
      <div>
        <p>404 Not Found</p>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <Link to="/">Go to main page</Link>
      </div>
    </>

  );
}

export default EmptyPage;
