import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  title: string;
  genres: string;
  releaseDate: number;
}

function App({ title, genres, releaseDate }: MainPageProps): JSX.Element {
  return (<MainPage title={title} genres={genres} releaseDate={releaseDate} />);
}

export default App;
