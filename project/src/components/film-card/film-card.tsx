import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
  index: number;
}

function FilmCard({ film, index }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
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
