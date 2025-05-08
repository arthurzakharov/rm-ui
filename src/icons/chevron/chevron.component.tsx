import type { ComponentProps } from 'react';

export default function IconChevron(props: ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 448 512" {...props}>
      <path
        opacity="0.4"
        d="M224.1 284.64l-56.89 56.78-154-154.31a24 24 0 010-33.94l22.65-22.7a23.93 23.93 0 0133.84 0z"
      />
      <path d="M435 187.15L241 381.48a23.94 23.94 0 01-33.84 0l-40-40 211.34-211a23.93 23.93 0 0133.84 0L435 153.21a24 24 0 010 33.94z" />
    </svg>
  );
}
