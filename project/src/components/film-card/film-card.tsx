import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { Film } from '../../types/films';
import { PLAY_TIMEOUT } from '../../const';

type FilmCardProps = {
  film: Film;
}

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        videoRef.current?.play();
      }
    }, PLAY_TIMEOUT
    );

    if (!isPlaying) {
      videoRef.current?.pause();
      videoRef.current?.load();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying]);


  return (
    <article className={'small-film-card catalog__films-card'} onMouseOver={() => {
      setIsPlaying(true);
    }} onMouseOut={() => {
      setIsPlaying(false);
    }}
    >
      <div className="small-film-card__image">
        <video
          src={film.previewVideoLink}
          poster={film.previewImage}
          loop
          muted
          ref={videoRef}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} title={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
