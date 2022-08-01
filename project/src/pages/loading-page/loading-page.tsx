function LoadingPage(): JSX.Element {
  return (
    <body>


      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="Some background" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="user-block">
            <a href="sign-in.html" className="user-block__link">Sign in</a>
          </div>
        </header>

      </section>
      <div>
        <p>Loading... Please wait.</p>
      </div>
    </body>
  );
}

export default LoadingPage;
