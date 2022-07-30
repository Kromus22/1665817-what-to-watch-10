import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
  setShowCount: (count: number) => void;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={Setting.TITLE}
        genre={Setting.GENRE}
        releaseDate={Setting.RELEASE_DATE}
        setShowCount={setShowCount}
      />
    </Provider>
  </React.StrictMode>,
);
