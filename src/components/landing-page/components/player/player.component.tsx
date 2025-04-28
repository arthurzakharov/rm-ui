import type { MouseEvent, KeyboardEvent } from 'react';
import type { PlayerProps } from './player.type';
import { useEffect, useRef, useState, Fragment } from 'react';
import clsx from 'clsx';
import css from './player.module.css';

export default function Player(props: PlayerProps) {
  const { videoId = '', description = '', onPlay = () => {} } = props;

  const videoRef = useRef<HTMLDivElement>(null);
  const videoLinkRef = useRef<HTMLAnchorElement>(null);
  const videoMediaRef = useRef<HTMLImageElement>(null);
  const [id, setId] = useState<string>('');

  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isVideClicked, setIsVideoClicked] = useState(false);

  useEffect(() => {
    if (videoMediaRef.current && videoLinkRef.current) {
      setId(parseMediaURL(videoMediaRef.current.src));
      videoLinkRef.current.removeAttribute('href');
      setIsVideoEnabled(true);
    }
  }, []);

  const onVideoClickHandler = (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsVideoClicked((prevState) => {
      if (onPlay) onPlay(id);
      return !prevState;
    });
  };

  const generateURL = (id: string): string => {
    return `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;
  };

  const parseMediaURL = (src: string): string => {
    const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    const match = src.match(regexp);
    return match ? match[1] : '';
  };

  return (
    <div
      data-testid="player"
      ref={videoRef}
      className={clsx(css.Player, {
        [css.PlayerEnabled]: isVideoEnabled,
      })}
      onClick={onVideoClickHandler}
    >
      {isVideClicked ? (
        <iframe
          data-testid="player-frame"
          allowFullScreen
          allow="autoplay"
          src={generateURL(id)}
          className={css.Frame}
        />
      ) : (
        <Fragment>
          <a
            data-testid="player-link"
            ref={videoLinkRef}
            href={`https://youtube.com/embed/${videoId}`}
            aria-label="YouTube Video"
            className={css.Link}
          >
            <picture>
              <source
                data-testid="player-source"
                srcSet={`https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`}
                type="image/webp"
              />
              <img
                data-testid="player-image"
                ref={videoMediaRef}
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt={description}
                className={css.Media}
              />
            </picture>
          </a>
          <button
            data-testid="player-button"
            aria-label="Play video"
            className={clsx(css.Button, {
              [css.ButtonEnabled]: isVideoEnabled,
            })}
            onKeyDown={onVideoClickHandler}
          >
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path
                className={css.ButtonShape}
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              />
              <path className={css.ButtonIcon} d="M 45,24 27,14 27,34" />
            </svg>
          </button>
        </Fragment>
      )}
    </div>
  );
}

Player.displayName = 'Player';
