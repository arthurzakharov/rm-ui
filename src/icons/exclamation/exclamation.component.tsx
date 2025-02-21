import type { ComponentProps, FC } from 'react';

const IconExclamation: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="currentColor" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 302 302" {...props}>
    <polygon points="119,0 129,218 172,218 182,0" />
    <rect x="130" y="261" width="40" height="40" />
  </svg>
);

export default IconExclamation;
