import type { ComponentProps } from 'react';

export default function IconMagnifyingGlass(props: ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" {...props}>
      <path
        opacity="0.4"
        d="M208 80a128 128 0 11-90.51 37.49A127.15 127.15 0 01208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
      />
      <path
        opacity="0.7"
        d="M504.9 476.7L476.6 505a23.9 23.9 0 01-33.9 0L343 405.3a24 24 0 01-7-17V372l36-36h16.3a24 24 0 0117 7l99.7 99.7a24.11 24.11 0 01-.1 34z"
      />
    </svg>
  );
}
