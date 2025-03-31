import type { ComponentProps, FC } from 'react';

const IconCheck: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="currentColor" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 548 548" {...props}>
    <polygon points="449,47 195,301 99,205 0,305 95,401 195,500 294,401 548,147" />
  </svg>
);

export default IconCheck;
