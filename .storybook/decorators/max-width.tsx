import type { CSSProperties, ReactNode } from 'react';

const MaxWidthDecorator =
  (maxWidth = 600, style?: CSSProperties) =>
  (storyFn: () => ReactNode) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          ...style,
        }}
      >
        <div
          style={{
            maxWidth,
            width: '100%',
          }}
        >
          {storyFn()}
        </div>
      </div>
    );
  };

export default MaxWidthDecorator;
