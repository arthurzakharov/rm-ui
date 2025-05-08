import type { ComponentProps } from 'react';

export default function IconExclamationTriangle(props: ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/1999/xlink" viewBox="6 2 36 36" {...props}>
      <path
        fill="currentColor"
        fillOpacity={0.25}
        d="M20.536 6c1.54-2.667 5.388-2.667 6.928 0l13.857 24c1.54 2.667-.385 6-3.465 6H10.144c-3.08 0-5.004-3.333-3.465-6L20.536 6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={3}
        strokeOpacity={0.25}
        fill="none"
        d="M21.835 6.75c.962-1.667 3.368-1.667 4.33 0l13.857 24c.962 1.667-.241 3.75-2.166 3.75H10.144c-1.925 0-3.128-2.083-2.165-3.75l13.856-24z"
      />
      <path
        fill="white"
        d="M25.035 24.67h-2.382l-.498-9.542h3.378l-.498 9.541zm-2.92 3.339c0-.547.147-.96.44-1.24.293-.28.72-.42 1.28-.42.54 0 .956.143 1.25.43.299.286.448.696.448 1.23 0 .514-.15.921-.449 1.22-.3.294-.716.44-1.25.44-.547 0-.97-.143-1.27-.43-.299-.293-.448-.703-.448-1.23z"
      />
    </svg>
  );
}
