import type { LogoBoardProps } from './logo-board.type';
import { useState } from 'react';
import css from './logo-board.module.css';

const paths: Record<string, string> = import.meta.glob('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export default function LogoBoard(props: LogoBoardProps) {
  const { logos = [] } = props;
  const [failedLogos, setFailedLogos] = useState<number[]>([]);

  const getSrc = (name: string): string => {
    const key = Object.keys(paths).find((key) => key.includes(name)) || '';
    return paths[key] || '';
  };

  return (
    <div className={css.LogoBoard}>
      <div className={css.Wrapper}>
        {logos
          .sort((prev, next) => (next.priority || 1) - (prev.priority || 1))
          .map((file, i) => (
            <div key={file.name} className={css.Item}>
              {failedLogos.includes(i) ? (
                <div data-testid="logo-board-not-found" className={css.NotFound} />
              ) : (
                <img
                  data-testid="logo-board-image"
                  src={getSrc(file.name)}
                  alt={file.name}
                  className={css.Image}
                  onError={() => setFailedLogos([...failedLogos, i])}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

LogoBoard.displayName = 'LogoBoard';
